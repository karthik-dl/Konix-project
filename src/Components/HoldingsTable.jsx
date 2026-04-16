import HoldingRow from "./HoldingRow";

export default function HoldingTable({ holdings, selected, setSelected }) {

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
    if (exists) {
      return prev.filter((i) => i.coin !== item.coin);
    } else {
      return [...prev, item];
    }
  });
};

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500 border-b">
            <th>
              <input
                type="checkbox"
                checked={selected.length === holdings.length}
                onChange={handleSelectAll}
              />
            </th>
            <th>Asset</th>
            <th>Holdings</th>
            <th>Avg Price</th>
            <th>Current Price</th>
            <th>STCG</th>
            <th>LTCG</th>
          </tr>
        </thead>

        <tbody>
          {holdings.map((item) => (
  <HoldingRow
    key={item.coin}   // ✅ FIX
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
