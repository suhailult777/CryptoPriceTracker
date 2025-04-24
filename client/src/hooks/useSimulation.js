import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCryptoPrices } from '@/store/cryptoSlice';

// Helper to generate random price changes
const generateRandomChange = (baseValue, percentageRange = 0.5) => {
  const changePercent = (Math.random() * percentageRange * 2) - percentageRange;
  return baseValue * (1 + changePercent / 100);
};

// Simulation hook
const useSimulation = () => {
  const dispatch = useDispatch();
  const { assets } = useSelector((state) => state.crypto);
  
  useEffect(() => {
    const simulateRealTimeUpdates = () => {
      // Randomly select assets to update (70% chance for each)
      const assetsToUpdate = assets.filter(() => Math.random() > 0.3).map(asset => asset.id);
      
      if (assetsToUpdate.length === 0) return;
      
      const updates = assetsToUpdate.map(assetId => {
        const asset = assets.find(a => a.id === assetId);
        
        // Generate random changes
        const newPrice = generateRandomChange(asset.price, 1);
        const priceChangePercent = ((newPrice - asset.price) / asset.price) * 100;
        
        // Update percentage changes based on price movement
        const new1hChange = asset.percentChange1h + (priceChangePercent * 0.2);
        const new24hChange = asset.percentChange24h + (priceChangePercent * 0.1);
        const new7dChange = asset.percentChange7d + (priceChangePercent * 0.05);
        
        // Update volume
        const newVolume = generateRandomChange(asset.volume24h, 2);
        
        // Determine sparkline trend based on 7d percentage
        let sparkline = asset.sparkline;
        if (new7dChange > 5) sparkline = 'up';
        else if (new7dChange < -5) sparkline = 'down';
        else if (Math.abs(new7dChange) < 0.5) sparkline = 'neutral';
        else sparkline = 'volatile';
        
        return {
          id: assetId,
          price: newPrice,
          percentChange1h: new1hChange,
          percentChange24h: new24hChange,
          percentChange7d: new7dChange,
          volume24h: newVolume,
          sparkline
        };
      });
      
      dispatch(updateCryptoPrices(updates));
    };
    
    // Run simulation every 1.5 seconds
    const intervalId = setInterval(simulateRealTimeUpdates, 1500);
    
    // Clean up on unmount
    return () => clearInterval(intervalId);
  }, [assets, dispatch]);
};

export default useSimulation;
