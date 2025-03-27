import React, { useState } from "react";
import ArticleList from "./components/ArticleList";

function App() {
  const [articles, setArticles] = useState([
    { title: "Articolo 1" },
    { title: "Articolo 2" },
    { title: "Articolo 3" },
  ]);
  const [newTitle, setNewTitle] = useState("");

  return (
    <div className="App">
      <ArticleList articles={articles} />
      <form>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Inserisci il titolo dell'articolo"
        />
        <button type="submit">Aggiungi Articolo</button>
      </form>
    </div>
  );
}

export default App;
