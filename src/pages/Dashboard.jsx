import { useEffect, useState } from "react";
import { getHoldings, getCapitalGains } from "../services/api";
import { updateAfterHarvesting, calculateRealised } from "../utils/Calculations";
import HoldingsTable from "../Components/HoldingsTable";
import Card from "../Components/Card"

export default function Dashboard() {
  const [holdings, setHoldings] = useState([]);
  const [capitalGains, setCapitalGains] = useState(null);
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch initial data
  useEffect(() => {
    async function fetchData() {
      try {
        const [holdingsData, gainsData] = await Promise.all([
          getHoldings(),
          getCapitalGains(),
        ]);

        setHoldings(holdingsData);
        setCapitalGains(gainsData);
      } catch (err) {
        console.error("Error fetching data", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading data...</p>;
  }

  // Calculate updated gains after user selection
  const harvestedGains = updateAfterHarvesting(
    capitalGains,
    selectedAssets
  );

  const preHarvest = calculateRealised(
    capitalGains.stcg,
    capitalGains.ltcg
  );

  const postHarvest = calculateRealised(
    harvestedGains.stcg,
    harvestedGains.ltcg
  );

  const savings = preHarvest - postHarvest;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Tax Loss Harvesting</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Pre Harvesting" data={capitalGains} dark />
        <Card
          title="After Harvesting"
          data={harvestedGains}
          savings={savings}
        />
      </div>

      <HoldingsTable
        holdings={holdings}
        selected={selectedAssets}
        setSelected={setSelectedAssets}
      />
    </div>
  );
}