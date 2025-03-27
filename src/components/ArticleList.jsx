import React from "react";

const ArticleList = ({ articles }) => {
  return (
    <div>
      <h1>Lista degli Articoli</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
