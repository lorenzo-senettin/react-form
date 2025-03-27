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
    </div>
  );
}

export default App;
