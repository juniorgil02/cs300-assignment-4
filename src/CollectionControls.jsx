export default function CollectionControls({
  category,
  setCategory,
  sort,
  setSort,
}) {
  return (
    <section className="controls">
      <label htmlFor="filter">Filter category</label>
      <select
        id="filter"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="All">All categories</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Strategy">Strategy</option>
        <option value="Cooperative">Cooperative</option>
      </select>

      <label htmlFor="sort">Sort games</label>
      <select
        id="sort"
        value={sort}
        onChange={(event) => setSort(event.target.value)}
      >
        <option value="title">Title A–Z</option>
        <option value="minutes">Playing time</option>
      </select>
    </section>
  );
}