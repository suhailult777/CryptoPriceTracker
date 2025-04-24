import { createSlice } from '@reduxjs/toolkit';

// Initial sample crypto data
const initialState = {
  assets: [
    {
      id: 'bitcoin',
      rank: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 93759.48,
      percentChange1h: 0.43,
      percentChange24h: 0.93,
      percentChange7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      circulatingSupply: 19850000,
      maxSupply: 21000000,
      sparkline: 'up',
      starred: true
    },
    {
      id: 'ethereum',
      rank: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      price: 1802.46,
      percentChange1h: 0.60,
      percentChange24h: 3.21,
      percentChange7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      circulatingSupply: 120710000,
      maxSupply: null,
      sparkline: 'up',
      starred: false
    },
    {
      id: 'tether',
      rank: 3,
      name: 'Tether',
      symbol: 'USDT',
      price: 1.00,
      percentChange1h: 0.00,
      percentChange24h: 0.00,
      percentChange7d: 0.04,
      marketCap: 145320022085,
      volume24h: 92288882007,
      circulatingSupply: 145278000,
      maxSupply: null,
      sparkline: 'neutral',
      starred: false
    },
    {
      id: 'xrp',
      rank: 4,
      name: 'XRP',
      symbol: 'XRP',
      price: 2.22,
      percentChange1h: 0.46,
      percentChange24h: 0.54,
      percentChange7d: 6.18,
      marketCap: 130073814966,
      volume24h: 5131481491,
      circulatingSupply: 58398000,
      maxSupply: 100000000000,
      sparkline: 'up',
      starred: false
    },
    {
      id: 'bnb',
      rank: 5,
      name: 'BNB',
      symbol: 'BNB',
      price: 606.65,
      percentChange1h: 0.09,
      percentChange24h: -1.20,
      percentChange7d: 3.73,
      marketCap: 85471956947,
      volume24h: 1874281784,
      circulatingSupply: 140890000,
      maxSupply: 200000000,
      sparkline: 'up',
      starred: false
    },
    {
      id: 'solana',
      rank: 6,
      name: 'Solana',
      symbol: 'SOL',
      price: 151.51,
      percentChange1h: 0.53,
      percentChange24h: 1.26,
      percentChange7d: 14.74,
      marketCap: 78381958631,
      volume24h: 4881674486,
      circulatingSupply: 517310000,
      maxSupply: null,
      sparkline: 'up',
      starred: false
    }
  ]
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateCryptoPrices: (state, action) => {
      action.payload.forEach(update => {
        const index = state.assets.findIndex(crypto => crypto.id === update.id);
        if (index !== -1) {
          state.assets[index] = {
            ...state.assets[index],
            ...update
          };
        }
      });
    },
    toggleStar: (state, action) => {
      const index = state.assets.findIndex(crypto => crypto.id === action.payload);
      if (index !== -1) {
        state.assets[index].starred = !state.assets[index].starred;
      }
    }
  }
});

export const { updateCryptoPrices, toggleStar } = cryptoSlice.actions;

export default cryptoSlice.reducer;
