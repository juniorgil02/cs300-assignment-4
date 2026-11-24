export default function ItemCard({ item, onRemove, onToggleFavorite }) {
  const title = item.title?.trim() || "Untitled game";
  const creator = item.creator?.trim() || "Unknown creator";
  const category = item.category?.trim() || "Uncategorized";
  const description =
    item.description?.trim() || "No description available.";

  const minutes = Number.isFinite(item.minutes)
    ? `${item.minutes} minutes`
    : "Playing time unavailable";

  return (
    <article className="item-card">
      <div className="card-top">
        <span className="category">{category}</span>

        <button onClick={() => onToggleFavorite(item.id)}>
          {item.favorite ? "★ Favorited" : "☆ Favorite"}
        </button>
      </div>

      <h3>{title}</h3>
      <p className="creator">Created by {creator}</p>
      <p>{description}</p>
      <p>Playing time: {minutes}</p>

      <button
        className="remove-button"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </article>
  );
}