import ItemCard from "./ItemCard.jsx";
import StatusMessage from "./StatusMessage.jsx";

export default function ItemList({ items, onRemove, onToggleFavorite }) {
  if (items.length === 0) {
    return <StatusMessage />;
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