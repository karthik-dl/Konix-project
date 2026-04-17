import { useEffect, useState } from "react";
import { getHoldings, getCapitalGains } from "../services/api";
import {
  calculateRealised,
  updateAfterHarvesting,
} from "../utils/calculations";

import Card from "../Components/Card";
import HoldingsTable from "../Components/HoldingsTable";
import logo from "../assets/images.png";

export default function Dashboard() {
  const [holdings, setHoldings] = useState([]);
  const [capitalGains, setCapitalGains] = useState(null);
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showInfo, setShowInfo] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [h, g] = await Promise.all([
          getHoldings(),
          getCapitalGains(),
        ]);
        setHoldings(h);
        setCapitalGains(g);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!capitalGains) return null;

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
  <div className="min-h-screen bg-[#f3f4f6]">

    {/* 🔥 FULL WIDTH HEADER */}
<div className="bg-white border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-6 py-3 flex items-center">
    
    <img
      src={logo}
      alt="KoinX Logo"
      className="h-14 w-auto"
    />

  </div>
</div>

    {/* 🔥 MAIN CONTENT */}
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">

      {/* Title + How it works */}
      <div className="space-y-3 relative">

        <div className="flex items-center gap-4">
          <h1 className="text-[22px] font-medium text-gray-800">
            Tax Harvesting
          </h1>

          <button
            onClick={() => setShowInfo(!showInfo)}
            className="text-blue-600 text-sm hover:underline"
          >
            How it works?
          </button>
        </div>

        {/* Tooltip */}
        {showInfo && (
          <div className="absolute top-10 left-44 w-80 bg-white shadow-lg rounded-xl p-4 text-sm text-gray-700 z-50">
            <div className="absolute -top-2 left-6 w-4 h-4 bg-white rotate-45"></div>

            <ul className="space-y-2">
              <li>• See your capital gains for FY 2024–25</li>
              <li>• Select assets to reduce tax liability</li>
              <li>• Instantly view updated gains</li>
            </ul>

            <p className="mt-3 text-xs text-gray-500">
              <strong>Pro tip:</strong> Try combinations to optimize taxes
            </p>
          </div>
        )}
      </div>

      {/* 🔥 DISCLAIMER */}
      <div
        onClick={() => setShowDisclaimer(!showDisclaimer)}
        className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-[13px] hover:border-blue-400 transition cursor-pointer"
      >
        <div className="flex items-center gap-2 text-gray-800 font-medium text-sm">
    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs">
      i
    </div>
    <span>Important Notes & Disclaimers</span>
  </div>

        {showDisclaimer && (
          <div className="mt-2 pt-2 border-t border-blue-200 text-gray-600">
            <ul className="list-disc ml-5 space-y-2">
              <li>Tax-loss harvesting helps reduce taxes</li>
              <li>Short-term and long-term gains differ</li>
              <li>Consult a tax professional</li>
              <li>Market conditions may change</li>
              <li>This is not financial advice</li>
            </ul>
          </div>
        )}
      </div>

      {/* 🔥 CARDS */}
      <div className="grid md:grid-cols-2 gap-5">
        <Card title="Pre Harvesting" data={capitalGains} dark />
        <Card title="After Harvesting" data={updated} savings={savings} />
      </div>

      {/* 🔥 TABLE */}
      <HoldingsTable
        holdings={holdings}
        selected={selectedAssets}
        setSelected={setSelectedAssets}
      />

    </div>
  </div>
)
}