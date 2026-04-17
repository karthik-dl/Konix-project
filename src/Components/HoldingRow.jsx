export default function HoldingRow({ item, selected, onToggle }) {
  const isSelected = selected?.some((i) => i.coin === item.coin);

  return (
    <tr
      className={`border-b hover:bg-gray-50 transition ${
        isSelected ? "bg-blue-50" : ""
      }`}
    >
      {/* Checkbox */}
      <td className="px-3 py-3">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggle}
          className="cursor-pointer"
        />
      </td>

      {/* Asset */}
      <td className="px-3 py-3">
        <div className="flex items-center gap-3">
          <img src={item.logo} className="w-6 h-6" />
          <div>
            <p className="font-medium">{item.coin}</p>
            <p className="text-xs text-gray-400">{item.coinName}</p>
          </div>
        </div>
      </td>

      {/* Holdings */}
      <td className="px-3 py-3 text-right">
        <p>{item.totalHolding}</p>
        <p className="text-xs text-gray-400">
          ₹{Number(item.currentPrice).toLocaleString("en-IN")}
        </p>
      </td>

      {/* Total Current Value (NEW - Figma) */}
      <td className="px-3 py-3 text-right">
        ₹{(item.totalHolding * item.currentPrice).toLocaleString("en-IN")}
      </td>

      {/* STCG */}
      <td
        className={`px-3 py-3 text-right ${
          item.stcg.gain >= 0 ? "text-green-600" : "text-red-500"
        }`}
      >
        ₹{Number(item.stcg.gain).toLocaleString("en-IN")}
      </td>

      {/* LTCG */}
      <td
        className={`px-3 py-3 text-right ${
          item.ltcg.gain >= 0 ? "text-green-600" : "text-red-500"
        }`}
      >
        ₹{Number(item.ltcg.gain).toLocaleString("en-IN")}
      </td>

      {/* Amount to Sell */}
      <td className="px-3 py-3 text-right">
        {isSelected ? item.totalHolding : "-"}
      </td>
    </tr>
  );
}