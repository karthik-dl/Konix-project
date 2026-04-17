import { useEffect, useState } from "react";
import { getHoldings, getCapitalGains } from "../services/api.js";
import {
  calculateRealised,
  updateAfterHarvesting,
} from "../utils/calculations.js";

import Card from "../Components/card.jsx";
import HoldingsTable from "../Components/holdingsTable.jsx";
export default function Dashboard({ darkMode }) {
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
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">

      <div className="space-y-3 relative">
        <div className="flex items-center gap-4">
          <h1 className={`text-[22px] font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>
            Tax Harvesting
          </h1>

          <button
            onClick={() => setShowInfo(!showInfo)}
            className="text-blue-500 text-sm hover:underline"
          >
            How it works?
          </button>
        </div>


        {showInfo && (
          <div
            className={`absolute top-10 left-44 w-80 shadow-lg rounded-xl p-4 text-sm z-50 ${
              darkMode
                ? "bg-[#1f2937] text-gray-200"
                : "bg-white text-gray-700"
            }`}
          >
            <div
              className={`absolute -top-2 left-6 w-4 h-4 rotate-45 ${
                darkMode ? "bg-[#1f2937]" : "bg-white"
              }`}
            ></div>

            <ul className="space-y-2">
              <li>• See your capital gains for FY 2024–25</li>
              <li>• Select assets to reduce tax liability</li>
              <li>• Instantly view updated gains</li>
            </ul>

            <p className="mt-3 text-xs text-gray-400">
              <strong>Pro tip:</strong> Try combinations to optimize taxes
            </p>
          </div>
        )}
      </div>

      <div
        onClick={() => setShowDisclaimer(!showDisclaimer)}
        className={`rounded-lg px-4 py-2 text-[13px] cursor-pointer transition ${
          darkMode
            ? "bg-[#1e3a8a] border border-blue-500 text-white"
            : "bg-blue-50 border border-blue-200 hover:border-blue-400"
        }`}
      >
        <div className="flex items-center gap-2 font-medium text-sm">
          <div className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs">
            i
          </div>
          <span>Important Notes & Disclaimers</span>
        </div>

        {showDisclaimer && (
          <div
            className={`mt-2 pt-2 border-t ${
              darkMode
                ? "border-blue-400 text-gray-200"
                : "border-blue-200 text-gray-600"
            }`}
          >
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

     
      <div className="grid md:grid-cols-2 gap-5">
        <Card
          title="Pre Harvesting"
          data={capitalGains}
          dark
          darkMode={darkMode}
        />
        <Card
          title="After Harvesting"
          data={updated}
          savings={savings}
          darkMode={darkMode}
        />
      </div>

      
      <HoldingsTable
        holdings={holdings}
        selected={selectedAssets}
        setSelected={setSelectedAssets}
        darkMode={darkMode}
      />

    </div>
  );
}