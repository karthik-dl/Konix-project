export const calculateRealised = (stcg, ltcg) => {
  return (stcg.profits - stcg.losses) + (ltcg.profits - ltcg.losses);
};

export const updateAfterHarvesting = (baseGains, selectedAssets) => {
  const updated = JSON.parse(JSON.stringify(baseGains));

  selectedAssets.forEach((asset) => {
    // STCG
    if (asset.stcg.gain > 0) {
      updated.stcg.profits += asset.stcg.gain;
    } else {
      updated.stcg.losses += Math.abs(asset.stcg.gain);
    }

    // LTCG
    if (asset.ltcg.gain > 0) {
      updated.ltcg.profits += asset.ltcg.gain;
    } else {
      updated.ltcg.losses += Math.abs(asset.ltcg.gain);
    }
  });

  return updated;
};