import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App.jsx";

test("adds a new game to the collection", () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText("Game title"), {
    target: { value: "Space Adventure" },
  });

  fireEvent.change(screen.getByLabelText("Category"), {
    target: { value: "Puzzle" },
  });

  fireEvent.click(screen.getByRole("button", { name: "Add Game" }));

  expect(screen.getByText("Space Adventure")).toBeInTheDocument();
  expect(screen.getByText("Showing 9 games")).toBeInTheDocument();
});

test("shows validation errors when required fields are empty", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "Add Game" }));

  expect(screen.getByText("Enter a title.")).toBeInTheDocument();
  expect(screen.getByText("Choose a category.")).toBeInTheDocument();
});

test("removes a game from the collection", () => {
  render(<App />);

  const removeButtons = screen.getAllByRole("button", { name: "Remove" });

  fireEvent.click(removeButtons[0]);

  expect(screen.getByText("Showing 7 games")).toBeInTheDocument();
});

test("toggles a game's favorite status", () => {
  render(<App />);

  const favoriteButtons = screen.getAllByRole("button", { name: "☆ Favorite" });

  fireEvent.click(favoriteButtons[0]);

  expect(
    screen.getByRole("button", { name: "★ Favorited" })
  ).toBeInTheDocument();
});