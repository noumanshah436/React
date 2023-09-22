import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { deleteArticle } from "../api/articles";

const Article = ({ article, setReload }) => {
  return (
    <Card className=" my-4 w-100">
      <Card.Header className="p-3">
        <b>{article.title}</b>
      </Card.Header>
      <Card.Body>
        <Card.Text>{article.body}</Card.Text>

        <Link to={`/edit/${article.id}`} className="m-1 btn btn-primary">
          Edit
        </Link>

        <Button
          className="m-1"
          onClick={() => deleteArticle(article.id, setReload)}
          variant="contained"
          color="error"
          size="medium"
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Article;
