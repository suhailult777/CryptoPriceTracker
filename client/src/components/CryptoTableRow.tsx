import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toggleStar } from '@/store/cryptoSlice';
import { formatCurrency, formatLargeNumber, formatPercentage } from '@/lib/utils/formatters';
import { CryptoAsset } from '@/store/cryptoSlice';
import SparklineChart from './SparklineChart';
import { Star } from 'lucide-react';

interface CryptoTableRowProps {
  crypto: CryptoAsset;
}

const CryptoTableRow = ({ crypto }: CryptoTableRowProps) => {
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
    <tr className="crypto-row hover:bg-neutral-100/50" data-id={crypto.id}>
      <td className="py-4 pl-4 pr-3 whitespace-nowrap sticky left-0 bg-white z-10 hover:bg-neutral-100/50">
        <button
          onClick={handleToggleStar}
          className="star-button text-lg focus:outline-none"
          aria-label={crypto.starred ? "Remove from favorites" : "Add to favorites"}
        >
          <Star 
            className={crypto.starred ? "text-yellow-400 fill-yellow-400" : "text-neutral-200"} 
            size={18}
          />
        </button>
      </td>
      <td className="py-4 px-3 whitespace-nowrap text-sm">
        {crypto.rank}
      </td>
      <td className="py-4 px-3 whitespace-nowrap">
        <div className="flex items-center">
          <img 
            src={logoUrl} 
            alt={crypto.name} 
            className="w-8 h-8 mr-3"
            onError={(e) => {
              (e.target as HTMLImageElement).src = fallbackLogoUrl;
            }}
          />
          <div>
            <div className="font-medium">{crypto.name}</div>
            <div className="text-neutral-300 text-sm">{crypto.symbol}</div>
          </div>
        </div>
      </td>
      <td className={`py-4 px-3 whitespace-nowrap text-right font-medium font-mono ${getPriceFlashClass()}`} data-field="price">
        {formatCurrency(crypto.price)}
      </td>
      <td className={`py-4 px-3 whitespace-nowrap text-right font-mono ${percent1h.className}`} data-field="percentChange1h">
        {percent1h.value}
      </td>
      <td className={`py-4 px-3 whitespace-nowrap text-right font-mono ${percent24h.className}`} data-field="percentChange24h">
        {percent24h.value}
      </td>
      <td className={`py-4 px-3 whitespace-nowrap text-right font-mono ${percent7d.className}`} data-field="percentChange7d">
        {percent7d.value}
      </td>
      <td className="py-4 px-3 whitespace-nowrap text-right font-mono" data-field="marketCap">
        {formatCurrency(crypto.marketCap, 0)}
      </td>
      <td className="py-4 px-3 whitespace-nowrap text-right">
        <div className="font-mono">{formatCurrency(crypto.volume24h, 0)}</div>
        <div className="text-neutral-300 text-xs">{formatLargeNumber(crypto.volume24h / crypto.price)} {crypto.symbol}</div>
      </td>
      <td className="py-4 px-3 whitespace-nowrap text-right">
        <div className="font-mono">{formatLargeNumber(crypto.circulatingSupply)} {crypto.symbol}</div>
        {crypto.maxSupply ? (
          <div className="text-neutral-300 text-xs">Max: {formatLargeNumber(crypto.maxSupply)}</div>
        ) : (
          <div className="text-neutral-300 text-xs">Max: ∞</div>
        )}
      </td>
      <td className="py-4 px-3 whitespace-nowrap w-48">
        <div className="w-40 h-12">
          <SparklineChart trend={crypto.sparkline} color={percent7d.className.includes('positive') ? '#16C784' : '#EA3943'} />
        </div>
      </td>
    </tr>
  );
};

export default CryptoTableRow;
