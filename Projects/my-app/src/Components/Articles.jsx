import React, { useState, useEffect } from "react";
import { getArticles, deleteArticle } from "../api/articles";
import Article from "./Article";
import { Link } from "react-router-dom";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setReload(false);
    getArticles(setArticles);
  }, [reload]);

  console.log("render Articles");
  return (
    <>
      <div className="m-4  ">
        <div className="d-flex my-4 justify-content-between align-items-center">
          <h1 className=" ">My Articles</h1>
          <Link to="/new_article" className="btn btn-primary ">
            New Article
          </Link>
        </div>

        {articles.map((article) => {
          return (
            <Article
              key={article.id}
              article={article}
              setReload={setReload}
              deleteArticle={deleteArticle}
            />
          );
        })}

        <br />
      </div>
    </>
  );
};

export default Articles;
