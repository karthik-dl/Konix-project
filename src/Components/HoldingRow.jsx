import React from "react";
export default function HoldingRow({ item, selected, onToggle, darkMode }) {
  const isSelected = selected?.some((i) => i.coin === item.coin);

  return (
    <tr
      className={`border-b transition ${
        darkMode
          ? "border-gray-700 hover:bg-[#1f2937]"
          : "hover:bg-gray-50"
      } ${
        isSelected
          ? darkMode
            ? "bg-[#1e3a8a]"
            : "bg-[#f0f6ff]"
          : ""
      }`}
    >
      <td className="px-3 py-3">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggle}
        />
      </td>

      <td className="px-3 py-3 whitespace-nowrap">
        <div className="flex items-center gap-3">
          <img src={item.logo} className="w-6 h-6" />
          <div>
            <p className={`font-medium ${darkMode ? "text-white" : ""}`}>
              {item.coin}
            </p>
            <p className="text-xs text-gray-400">{item.coinName}</p>
          </div>
        </div>
      </td>

      <td className="px-3 py-3 text-right whitespace-nowrap">
        <p>{item.totalHolding} {item.coin}</p>
        <p className="text-xs text-gray-400">
          ₹{Number(item.currentPrice).toLocaleString("en-IN")} / {item.coin}
        </p>
      </td>

      <td className="px-3 py-3 text-right whitespace-nowrap">
        ₹{(item.totalHolding * item.currentPrice).toLocaleString("en-IN")}
      </td>

      <td
        className={`px-3 py-3 text-right whitespace-nowrap ${
          item.stcg.gain >= 0 ? "text-green-600" : "text-red-500"
        }`}
      >
        <p>
          {item.stcg.gain >= 0 ? "+" : "-"}₹
          {Math.abs(item.stcg.gain).toLocaleString("en-IN")}
        </p>
        <p className="text-xs text-gray-400">
          {item.stcg.balance} {item.coin}
        </p>
      </td>

      <td
        className={`px-3 py-3 text-right whitespace-nowrap ${
          item.ltcg.gain >= 0 ? "text-green-600" : "text-red-500"
        }`}
      >
        <p>
          {item.ltcg.gain >= 0 ? "+" : "-"}₹
          {Math.abs(item.ltcg.gain).toLocaleString("en-IN")}
        </p>
        <p className="text-xs text-gray-400">
          {item.ltcg.balance} {item.coin}
        </p>
      </td>

      <td className="px-3 py-3 text-right whitespace-nowrap">
        {isSelected ? `${item.totalHolding} ${item.coin}` : "-"}
      </td>
    </tr>
  );
}