import HoldingRow from "./HoldingRow";

export default function HoldingsTable({ holdings, selected, setSelected }) {
  holdings = holdings || [];
  selected = selected || [];

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

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Holdings</h2>

      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-sm">
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

            <th className="px-3 py-2 text-left">Asset</th>

            <th className="px-3 py-2 text-right">
              Holdings
              <p className="text-xs text-gray-400">Current Market Rate</p>
            </th>

            <th className="px-3 py-2 text-right">
              Total Current Value
            </th>

            <th className="px-3 py-2 text-right">Short-term</th>
            <th className="px-3 py-2 text-right">Long-Term</th>
            <th className="px-3 py-2 text-right">Amount to Sell</th>
          </tr>
        </thead>

        <tbody>
          {holdings.map((item) => (
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
  );
}