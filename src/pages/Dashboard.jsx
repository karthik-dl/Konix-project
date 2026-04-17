import { useEffect, useState } from "react";
import { getHoldings, getCapitalGains } from "../services/api";
import {calculateRealised,updateAfterHarvesting,} from "../utils/Calculations";
import Card from "../Components/Card";
import HoldingsTable from "../Components/HoldingsTable";

export default function Dashboard() {
  const [holdings, setHoldings] = useState([]);
  const [capitalGains, setCapitalGains] = useState(null);
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const [h, g] = await Promise.all([
        getHoldings(),
        getCapitalGains(),
      ]);
      setHoldings(h);
      setCapitalGains(g);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <p className="text-center p-10">Loading...</p>;

  const updated = updateAfterHarvesting(capitalGains, selectedAssets);

  const pre = calculateRealised(capitalGains.stcg, capitalGains.ltcg);
  const post = calculateRealised(updated.stcg, updated.ltcg);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Tax Loss Harvesting</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Pre Harvesting" data={capitalGains} dark />
        <Card title="After Harvesting" data={updated} savings={pre - post} />
      </div>

      <HoldingsTable
        holdings={holdings}
        selected={selectedAssets}
        setSelected={setSelectedAssets}
      />
    </div>
  );
}