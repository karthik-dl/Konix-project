export default function Card({ title, data, dark, savings }) {
  const netST = data.stcg.profits - data.stcg.losses;
  const netLT = data.ltcg.profits - data.ltcg.losses;
  const realised = netST + netLT;

  return (
    <div
      className={`rounded-2xl p-6 shadow-sm ${
        dark
          ? "bg-white text-black border border-gray-200"
          : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
      }`}
    >
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      {/* Header Row */}
      <div className="grid grid-cols-3 text-sm mb-2 font-medium">
        <p></p>
        <p className="text-right">Short-term</p>
        <p className="text-right">Long-term</p>
      </div>

      {/* Profits */}
      <div className="grid grid-cols-3 text-sm py-1">
        <p>Profits</p>
        <p className="text-right">
          ₹{Number(data.stcg.profits).toLocaleString("en-IN")}
        </p>
        <p className="text-right">
          ₹{Number(data.ltcg.profits).toLocaleString("en-IN")}
        </p>
      </div>

      {/* Losses */}
      <div className="grid grid-cols-3 text-sm py-1">
        <p>Losses</p>
        <p className="text-right">
          - ₹{Number(data.stcg.losses).toLocaleString("en-IN")}
        </p>
        <p className="text-right">
          - ₹{Number(data.ltcg.losses).toLocaleString("en-IN")}
        </p>
      </div>

      {/* Net Capital Gains */}
      <div className="grid grid-cols-3 text-sm py-2 font-medium">
        <p>Net Capital Gains</p>
        <p className="text-right">
          ₹{Number(netST).toLocaleString("en-IN")}
        </p>
        <p className="text-right">
          ₹{Number(netLT).toLocaleString("en-IN")}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-3"></div>

      {/* Final Gains */}
      <div className="flex justify-between items-center">
        <p className="font-medium">
          {dark
            ? "Realised Capital Gains:"
            : "Effective Capital Gains:"}
        </p>
        <p className="text-xl font-bold">
          ₹{Number(realised).toLocaleString("en-IN")}
        </p>
      </div>

      {/* Savings Message */}
      {!dark && savings > 0 && (
        <p className="text-sm mt-3">
          🎉 You are going to save upto ₹
          {Number(savings).toLocaleString("en-IN")}
        </p>
      )}
    </div>
  );
}