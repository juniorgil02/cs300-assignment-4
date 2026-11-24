import ItemCard from "./ItemCard.jsx";

export default function ItemList({ items, onRemove, onToggleFavorite }) {
  if (items.length === 0) {
    return <p className="empty-message">No games found. Try another category!</p>;
  }

  return (
    <section className="item-list">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onRemove={onRemove}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </section>
  );
}