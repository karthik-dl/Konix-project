
export const getHoldings = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          coin: "ETH",
          coinName: "Ethereum",
          logo: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png",
          currentPrice: 216182,
          totalHolding: 0.000421,
          averageBuyPrice: 3909,
          stcg: { gain: 89.4, balance: 0.000421 },
          ltcg: { gain: 0, balance: 0 },
        },
        {
          coin: "MATIC",
          coinName: "Polygon",
          logo: "https://coin-images.coingecko.com/coins/images/4713/large/polygon.png",
          currentPrice: 22.22,
          totalHolding: 2.75,
          averageBuyPrice: 0.68,
          stcg: { gain: 59.24, balance: 2.75 },
          ltcg: { gain: 0, balance: 0 },
        },
        {
          coin: "USDT",
          coinName: "Tether",
          logo: "https://coin-images.coingecko.com/coins/images/325/large/Tether.png",
          currentPrice: 85.42,
          totalHolding: 0.000158,
          averageBuyPrice: 1.49,
          stcg: { gain: 0.013, balance: 0.000158 },
          ltcg: { gain: 0, balance: 0 },
        }
      ]);
    }, 500);
  });
};


// MOCK CAPITAL GAINS API  ✅ THIS WAS MISSING
export const getCapitalGains = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        stcg: {
          profits: 70200.88,
          losses: 1548.53,
        },
        ltcg: {
          profits: 5020,
          losses: 3050,
        },
      });
    }, 500);
  });
};