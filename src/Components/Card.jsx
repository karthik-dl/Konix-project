export default function Card({ title, data, dark, savings }) {
  const netSTCG = data.stcg.profits - data.stcg.losses;
  const netLTCG = data.ltcg.profits - data.ltcg.losses;
  const realisedGains = netSTCG + netLTCG;

  return (
    <div
      className={`rounded-2xl p-6 shadow-md ${
        dark ? "bg-black text-white" : "bg-blue-600 text-white"
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="opacity-70">STCG Profits</p>
          <p className="font-semibold">
            ₹{data.stcg.profits.toLocaleString("en-IN")}
          </p>
        </div>

        <div>
          <p className="opacity-70">STCG Losses</p>
          <p className="font-semibold">
            ₹{data.stcg.losses.toLocaleString("en-IN")}
          </p>
        </div>

        <div>
          <p className="opacity-70">LTCG Profits</p>
          <p className="font-semibold">
            ₹{data.ltcg.profits.toLocaleString("en-IN")}
          </p>
        </div>

        <div>
          <p className="opacity-70">LTCG Losses</p>
          <p className="font-semibold">
            ₹{data.ltcg.losses.toLocaleString("en-IN")}
          </p>
        </div>
      </div>

      <div className="mt-4 border-t border-white/20 pt-4">
        <p className="text-sm opacity-70">Realised Gains</p>
        <p className="text-xl font-bold">
          ₹{realisedGains.toLocaleString("en-IN")}
        </p>
      </div>

      {savings > 0 && (
        <p className="mt-3 text-green-300 font-medium">
          You're going to save ₹{savings.toLocaleString("en-IN")}
        </p>
      )}
    </div>
  );
}
