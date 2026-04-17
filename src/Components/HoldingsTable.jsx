import { useState } from "react";
import HoldingRow from "./HoldingRow";

export default function HoldingsTable({ holdings, selected, setSelected }) {
  holdings = holdings || [];
  selected = selected || [];

  const [showAll, setShowAll] = useState(false);
  const [sortOrder, setSortOrder] = useState(null); // asc | desc

  const handleSelectAll = () => {
    if (selected.length === holdings.length) {
      setSelected([]);
    } else {
      setSelected(holdings);
    }
  };

  const handleToggle = (item) => {
    setSelected((prev) => {
      const exists = prev.find((i) => i.coin === item.coin);
      return exists
        ? prev.filter((i) => i.coin !== item.coin)
        : [...prev, item];
    });
  };

  // 🔥 SORT LOGIC
  let sortedHoldings = [...holdings];

  if (sortOrder) {
    sortedHoldings.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.stcg.gain - b.stcg.gain;
      } else {
        return b.stcg.gain - a.stcg.gain;
      }
    });
  }

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h2 className="text-lg font-medium mb-4">Holdings</h2>

      {/* Responsive wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-[800px] w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm">
              
              {/* Select all */}
              <th className="px-3 py-2 whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={
                    holdings.length > 0 &&
                    selected.length === holdings.length
                  }
                  onChange={handleSelectAll}
                />
              </th>

              <th className="px-3 py-2 text-left whitespace-nowrap">
                Asset
              </th>

              <th className="px-3 py-2 text-right whitespace-nowrap">
                Holdings
              </th>

              <th className="px-3 py-2 text-right whitespace-nowrap">
                Total Current Value
              </th>

              {/* 🔥 SORTABLE COLUMN */}
              <th
                onClick={() =>
                  setSortOrder((prev) =>
                    prev === "asc" ? "desc" : "asc"
                  )
                }
                className="px-3 py-2 text-right whitespace-nowrap cursor-pointer"
              >
                Short-term{" "}
                {sortOrder === "asc"
                  ? "↑"
                  : sortOrder === "desc"
                  ? "↓"
                  : ""}
              </th>

              <th className="px-3 py-2 text-right whitespace-nowrap">
                Long-Term
              </th>

              <th className="px-3 py-2 text-right whitespace-nowrap">
                Amount to Sell
              </th>
            </tr>
          </thead>

          <tbody>
            {(showAll
              ? sortedHoldings
              : sortedHoldings.slice(0, 5)
            ).map((item) => (
              <HoldingRow
                key={item.coin}
                item={item}
                selected={selected}
                onToggle={() => handleToggle(item)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* View toggle */}
      {holdings.length > 5 && (
        <p
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 text-sm mt-3 cursor-pointer hover:underline"
        >
          {showAll ? "Show less" : "View all"}
        </p>
      )}
    </div>
  );
}