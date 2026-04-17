export default function HoldingRow({ item, selected, onToggle }) {
  const isSelected = selected?.some((i) => i.coin === item.coin);

  return (
    <tr className={`border-b hover:bg-gray-50 ${isSelected ? "bg-blue-50" : ""}`}>
      <td>
        <input type="checkbox" checked={isSelected} onChange={onToggle} />
      </td>

      <td className="flex items-center gap-3 py-3">
        <img src={item.logo} className="w-6 h-6" />
        <div>
          <p>{item.coin}</p>
          <p className="text-xs text-gray-400">{item.coinName}</p>
        </div>
      </td>

      <td>{item.totalHolding}</td>

      <td>₹{Number(item.averageBuyPrice).toLocaleString("en-IN")}</td>
      <td>₹{Number(item.currentPrice).toLocaleString("en-IN")}</td>

      <td className={item.stcg.gain >= 0 ? "text-green-600" : "text-red-500"}>
        ₹{Number(item.stcg.gain).toLocaleString("en-IN")}
      </td>

      <td className={item.ltcg.gain >= 0 ? "text-green-600" : "text-red-500"}>
        ₹{Number(item.ltcg.gain).toLocaleString("en-IN")}
      </td>

      <td>{isSelected ? item.totalHolding : "-"}</td>
    </tr>
  );
}