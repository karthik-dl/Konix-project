import { useState } from "react";
import HoldingRow from "./HoldingRow";

export default function HoldingsTable({
  holdings,
  selected,
  setSelected,
  darkMode,
}) {
  holdings = holdings || [];
  selected = selected || [];

  const [showAll, setShowAll] = useState(false);
  const [sortOrder, setSortOrder] = useState(null);

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

  let sortedHoldings = [...holdings];

  if (sortOrder) {
    sortedHoldings.sort((a, b) =>
      sortOrder === "asc"
        ? a.stcg.gain - b.stcg.gain
        : b.stcg.gain - a.stcg.gain
    );
  }

  return (
    <div
      className={`rounded-2xl shadow p-4 ${
        darkMode ? "bg-[#111827] text-white" : "bg-white"
      }`}
    >
      <h2 className="text-lg font-medium mb-4">Holdings</h2>

      <div className="overflow-x-auto">
        <table className="min-w-[800px] w-full text-sm">
          <thead>
  <tr
    className={`text-sm ${
      darkMode
        ? "bg-[#1f2937] text-gray-300"
        : "bg-gray-100 text-gray-600"
    }`}
  >
    
    <th className="px-3 py-2">
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
                darkMode={darkMode}   
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
