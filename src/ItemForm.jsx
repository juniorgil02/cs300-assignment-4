import { useState } from "react";

export default function ItemForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!title.trim()) newErrors.title = "Enter a title.";
    if (!category) newErrors.category = "Choose a category.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onAdd({
      title: title.trim(),
      category,
      creator: "You",
      minutes: 30,
      description: "A new item in your hobby collection.",
    });

    setTitle("");
    setCategory("");
  }

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <h2>Add to your collection</h2>

      <label htmlFor="title">Game title</label>
      <input
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        aria-describedby={errors.title ? "title-error" : undefined}
      />
      {errors.title && <p id="title-error">{errors.title}</p>}

      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        aria-describedby={errors.category ? "category-error" : undefined}
      >
        <option value="">Select a category</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Strategy">Strategy</option>
        <option value="Cooperative">Cooperative</option>
      </select>
      {errors.category && <p id="category-error">{errors.category}</p>}

      <button type="submit">Add Game</button>
    </form>
  );
}