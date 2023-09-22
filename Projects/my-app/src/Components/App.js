import React from "react";
import Articles from "./Articles";
import NewArticles from "./NewArticle";
import Edit from "./Edit";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/new_article" element={<NewArticles />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
