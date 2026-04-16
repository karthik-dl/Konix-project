
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
  },
  {
    coin: "LINK",
    coinName: "Chainlink",
    logo: "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png",
    currentPrice: 1450.14,
    totalHolding: 0.000047,
    averageBuyPrice: 9.17,
    stcg: { gain: 0.068, balance: 0.000047 },
    ltcg: { gain: 0, balance: 0 },
  },
  {
    coin: "FTM",
    coinName: "Fantom",
    logo: "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
    currentPrice: 52.99,
    totalHolding: 0.0426,
    averageBuyPrice: 1.70,
    stcg: { gain: 2.18, balance: 0.0426 },
    ltcg: { gain: 0, balance: 0 },
  },
  {
    coin: "WELT",
    coinName: "Fabwelt",
    logo: "https://coin-images.coingecko.com/coins/images/20505/large/welt.PNG",
    currentPrice: 0.0608,
    totalHolding: 1.06,
    averageBuyPrice: 0.0152,
    stcg: { gain: 0.048, balance: 1.06 },
    ltcg: { gain: 0, balance: 0 },
  },
  {
    coin: "OX",
    coinName: "OX Coin",
    logo: "https://coin-images.coingecko.com/coins/images/35365/large/logo.png",
    currentPrice: 0.133,
    totalHolding: 5,
    averageBuyPrice: 0.018,
    stcg: { gain: 0.57, balance: 5 },
    ltcg: { gain: 0, balance: 0 },
  },
  {
    coin: "SLN",
    coinName: "Smart Layer Network",
    logo: "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
    currentPrice: 6.66,
    totalHolding: 0.01,
    averageBuyPrice: 5.0,
    stcg: { gain: 0.016, balance: 0.01 },
    ltcg: { gain: 0, balance: 0 },
  },
  {
    coin: "GONE",
    coinName: "Gone",
    logo: "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
    currentPrice: 0.000146,
    totalHolding: 696324,
    averageBuyPrice: 0.000016,
    stcg: { gain: 90.39, balance: 696324 },
    ltcg: { gain: 0, balance: 0 },
  },
  {
    coin: "EZ",
    coinName: "EasyFi V2",
    logo: "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
    currentPrice: 0.885,
    totalHolding: 0.00054,
    averageBuyPrice: 6.53,
    stcg: { gain: -0.003, balance: 0.00054 },
    ltcg: { gain: 0, balance: 0 },
  }
      ])
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