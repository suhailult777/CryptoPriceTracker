import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toggleStar } from '@/store/cryptoSlice';
import { formatCurrency, formatLargeNumber, formatPercentage } from '@/lib/utils/formatters';
import { CryptoAsset } from '@/store/cryptoSlice';
import SparklineChart from './SparklineChart';
import { Star } from 'lucide-react';

interface CryptoTableRowProps {
  crypto: CryptoAsset;
  isMobile?: boolean;
}

const CryptoTableRow = ({ crypto, isMobile = false }: CryptoTableRowProps) => {
  const dispatch = useDispatch();
  const [priceFlash, setPriceFlash] = useState<'up' | 'down' | null>(null);
  const prevPriceRef = useRef(crypto.price);
  
  useEffect(() => {
    if (crypto.price > prevPriceRef.current) {
      setPriceFlash('up');
    } else if (crypto.price < prevPriceRef.current) {
      setPriceFlash('down');
    }
    
    const flashTimeout = setTimeout(() => {
      setPriceFlash(null);
    }, 1000);
    
    prevPriceRef.current = crypto.price;
    
    return () => clearTimeout(flashTimeout);
  }, [crypto.price]);
  
  const handleToggleStar = () => {
    dispatch(toggleStar(crypto.id));
  };
  
  const percent1h = formatPercentage(crypto.percentChange1h);
  const percent24h = formatPercentage(crypto.percentChange24h);
  const percent7d = formatPercentage(crypto.percentChange7d);
  
  const getPriceFlashClass = () => {
    if (priceFlash === 'up') return 'price-flash-up';
    if (priceFlash === 'down') return 'price-flash-down';
    return '';
  };
  
  // Get logo URL based on symbol
  const logoUrl = `https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/${crypto.symbol.toLowerCase()}.svg`;
  
  // Fallback if specific logo is not available
  const fallbackLogoUrl = `https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/generic.svg`;
  
  return (
    <tr className="crypto-row" data-id={crypto.id}>
      <td className="hidden sm:table-cell">
        <button
          onClick={handleToggleStar}
          className="star-button focus:outline-none"
          aria-label={crypto.starred ? "Remove from favorites" : "Add to favorites"}
        >
          <Star 
            className={crypto.starred ? "text-yellow-400 fill-yellow-400" : "text-neutral-200"} 
            size={18}
          />
        </button>
      </td>
      <td className="hidden sm:table-cell">
        {crypto.rank}
      </td>
      <td>
        <div className="flex items-center">
          <img 
            src={logoUrl} 
            alt={crypto.name} 
            className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3"
            onError={(e) => {
              (e.target as HTMLImageElement).src = fallbackLogoUrl;
            }}
          />
          <div>
            <div className="font-medium text-sm sm:text-base">{crypto.name}</div>
            <div className="text-xs text-gray-500">{crypto.symbol}</div>
          </div>
        </div>
      </td>
      <td className={`text-right font-medium text-sm sm:text-base ${getPriceFlashClass()}`} data-field="price">
        {formatCurrency(crypto.price)}
      </td>
      <td className={`hidden md:table-cell text-right text-sm sm:text-base ${percent1h.className}`} data-field="percentChange1h">
        {percent1h.value}
      </td>
      <td className={`text-right text-sm sm:text-base ${percent24h.className}`} data-field="percentChange24h">
        {percent24h.value}
      </td>
      <td className={`hidden lg:table-cell text-right text-sm sm:text-base ${percent7d.className}`} data-field="percentChange7d">
        {percent7d.value}
      </td>
      <td className="hidden md:table-cell text-right text-sm sm:text-base" data-field="marketCap">
        {formatCurrency(crypto.marketCap, 0)}
      </td>
      <td className="hidden lg:table-cell text-right text-sm sm:text-base">
        <div>{formatCurrency(crypto.volume24h, 0)}</div>
        <div className="text-xs text-gray-500">{formatLargeNumber(crypto.volume24h / crypto.price)} {crypto.symbol}</div>
      </td>
      <td className="hidden xl:table-cell text-right text-sm sm:text-base">
        <div>{formatLargeNumber(crypto.circulatingSupply)} {crypto.symbol}</div>
        {crypto.maxSupply ? (
          <div className="text-xs text-gray-500">Max: {formatLargeNumber(crypto.maxSupply)}</div>
        ) : (
          <div className="text-xs text-gray-500">Max: ∞</div>
        )}
      </td>
      <td className="hidden xl:table-cell">
        <div className="w-24 sm:w-40">
          <SparklineChart trend={crypto.sparkline} color={percent7d.className.includes('success') ? '#16C784' : '#EA3943'} />
        </div>
      </td>
    </tr>
  );
};

export default CryptoTableRow;
