# The Hobby Shelf — Assignment 4

**Name:** Gerardo Gil  
**Course:** CS300 Client-Side Web Development  
**Scenario:** Hobby Collection

**Live Application:** https://juniorgil02.github.io/cs300-assignment-4/  
**GitHub Repository:** https://github.com/juniorgil02/cs300-assignment-4

## About the Application

The Hobby Shelf is a React application for organizing a personal collection of games.

Users can add games, remove games, and mark their favorite items.

The application also supports category filtering, sorting, form validation, and an empty-state message.

## Components

- **App:** Owns the collection and application state.
- **Header:** Displays the application title and introduction.
- **ItemForm:** Allows users to add games with validation.
- **CollectionControls:** Provides filtering and sorting.
- **ItemList:** Displays the collection.
- **ItemCard:** Displays individual games and their actions.
- **StatusMessage:** Displays a message when no games match the selected criteria.

## How to Run the Application

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Run automated tests:

```bash
npm test
```

Create a production build:

```bash
npm run build
```