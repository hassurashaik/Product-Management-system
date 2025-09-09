export default function Controls({
  sortOrder,
  setSortOrder,
  search,
  setSearch,
  onApply,
}) {
  return (
    <div className="controls">
      <select
        className="select"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">Price: Low → High</option>
        <option value="desc">Price: High → Low</option>
      </select>

      <input
        className="input"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button className="btn primary" onClick={onApply}>
        Apply
      </button>
    </div>
  );
}
