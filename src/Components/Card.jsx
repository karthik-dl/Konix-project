export default function Card({ title, data, dark, savings, darkMode }) {
  const netST = data.stcg.profits - data.stcg.losses;
  const netLT = data.ltcg.profits - data.ltcg.losses;
  const realised = netST + netLT;

  return (
    <div
      className={`rounded-2xl p-6 ${
        darkMode
          ? dark
            ? "bg-[#111827] text-white"
            : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
          : dark
          ? "bg-white text-black border"
          : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      <div className="grid grid-cols-3 text-sm mb-2 font-medium">
        <p></p>
        <p className="text-right">Short-term</p>
        <p className="text-right">Long-term</p>
      </div>

      <div className="grid grid-cols-3 text-sm py-1">
        <p>Profits</p>
        <p className="text-right">₹{data.stcg.profits}</p>
        <p className="text-right">₹{data.ltcg.profits}</p>
      </div>

      <div className="grid grid-cols-3 text-sm py-1">
        <p>Losses</p>
        <p className="text-right">- ₹{data.stcg.losses}</p>
        <p className="text-right">- ₹{data.ltcg.losses}</p>
      </div>

      <div className="grid grid-cols-3 text-sm py-2 font-medium">
        <p>Net Capital Gains</p>
        <p className="text-right">₹{netST}</p>
        <p className="text-right">₹{netLT}</p>
      </div>

      <div className="border-t my-3 border-gray-300"></div>

      <div className="flex justify-between">
        <p>{dark ? "Realised Capital Gains:" : "Effective Capital Gains:"}</p>
        <p className="text-xl font-bold">₹{realised}</p>
      </div>

      {!dark && savings > 0 && (
        <p className="text-sm mt-2">Save ₹{savings}</p>
      )}
    </div>
  );
}