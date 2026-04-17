import { useEffect, useState } from "react";
import { getHoldings, getCapitalGains } from "../services/api";
import {
  calculateRealised,
  updateAfterHarvesting,
} from "../utils/calculations";

import Card from "../Components/Card";
import HoldingsTable from "../Components/HoldingsTable";

export default function Dashboard() {
  const [holdings, setHoldings] = useState([]);
  const [capitalGains, setCapitalGains] = useState(null);
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data
  useEffect(() => {
    async function fetchData() {
      try {
        const [h, g] = await Promise.all([
          getHoldings(),
          getCapitalGains(),
        ]);
        setHoldings(h);
        setCapitalGains(g);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Loading UI
  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500 text-lg">Loading data...</p>
      </div>
    );
  }

  // Safety check
  if (!capitalGains) return null;

  // Calculations
  const updated = updateAfterHarvesting(capitalGains, selectedAssets);

  const pre = calculateRealised(
    capitalGains.stcg,
    capitalGains.ltcg
  );

  const post = calculateRealised(
    updated.stcg,
    updated.ltcg
  );

  const savings = pre - post;

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-4">
      
      {/* Header Section (Figma Match) */}
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Tax Harvesting</h1>
        <p className="text-blue-600 text-sm cursor-pointer hover:underline">
          How it works?
        </p>
      </div>

      {/* Disclaimer Box */}
      <div className="border rounded-lg p-3 text-sm text-gray-600 flex justify-between items-center">
        <span>Important Notes & Disclaimers</span>
        <span>⌄</span>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card
          title="Pre Harvesting"
          data={capitalGains}
          dark
        />

        <Card
          title="After Harvesting"
          data={updated}
          savings={savings}
        />
      </div>

      {/* Holdings Table */}
      <HoldingsTable
        holdings={holdings}
        selected={selectedAssets}
        setSelected={setSelectedAssets}
      />
    </div>
  );
}