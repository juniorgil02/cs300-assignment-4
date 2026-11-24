import { useState } from "react";
import games from "../data/games.json";
import "./styles.css";
import ItemForm from "./ItemForm.jsx";
import ItemList from "./ItemList.jsx";
import CollectionControls from "./CollectionControls.jsx";

function Header() {
  return (
    <header className="app-header">
      <h1>The Hobby Shelf</h1>
      <p>Your personal collection of games.</p>
    </header>
  );
}

export default function App() {
  const [items, setItems] = useState(
    games.map((game) => ({ ...game, favorite: false }))
  );
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("title");

  function addItem(newItem) {
    setItems((current) => [
      ...current,
      { ...newItem, id: crypto.randomUUID(), favorite: false },
    ]);
  }

  function removeItem(id) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  function toggleFavorite(id) {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  }
const visibleItems = items
  .filter((item) => {
    const itemCategory =
      typeof item.category === "string" ? item.category.trim() : "";

    return category === "All" || itemCategory === category;
  })
  .sort((a, b) => {
    if (sort === "title") {
      const titleA = a.title?.trim() || "Untitled game";
      const titleB = b.title?.trim() || "Untitled game";

      return titleA.localeCompare(titleB);
    }

    const minutesA = Number.isFinite(a.minutes) ? a.minutes : Infinity;
    const minutesB = Number.isFinite(b.minutes) ? b.minutes : Infinity;

    return minutesA - minutesB;
  });
  return (
    <main className="app-container">
      <Header />
      <ItemForm onAdd={addItem} />
      <CollectionControls
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />
      <p className="game-count">Showing {visibleItems.length} games</p>
      <ItemList
        items={visibleItems}
        onRemove={removeItem}
        onToggleFavorite={toggleFavorite}
      />
    </main>
  );
}