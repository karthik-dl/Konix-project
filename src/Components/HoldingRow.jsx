export default function HoldingRow({ item, selected, onToggle }) {
  return (
    <tr
      className={`border-b hover:bg-gray-50 transition ${
        selected?.some((i) => i.coin === item.coin) ? "bg-blue-50" : ""
      }`}
    >
      <td>
        <input
          type="checkbox"
          checked={selected?.some((i) => i.coin === item.coin)}
          onChange={onToggle}
        />
      </td>

      <td className="flex items-center gap-3 py-3">
        <img src={item.logo} alt="logo" className="w-6 h-6" />
        <div>
          <p className="font-medium">{item.coin}</p>
          <p className="text-xs text-gray-400">{item.coinName}</p>
        </div>
      </td>

      <td>
        <p>{item.totalHolding}</p>
        <p className="text-xs text-gray-400">
          ₹{item.averageBuyPrice}
        </p>
      </td>

      <td>₹{item.averageBuyPrice}</td>
      <td>₹{item.currentPrice}</td>

      <td className={item.stcg.gain >= 0 ? "text-green-600" : "text-red-500"}>
        ₹{item.stcg.gain}
      </td>

      <td className={item.ltcg.gain >= 0 ? "text-green-600" : "text-red-500"}>
        ₹{item.ltcg.gain}
      </td>
    </tr>
  );
}