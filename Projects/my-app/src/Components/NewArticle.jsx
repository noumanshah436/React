import React, { useState } from "react";
import {  Button, TextField } from "@mui/material";
import { createArticle } from "../api/articles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NewArticle = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setBodyError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (body === "") {
      setBodyError(true);
    }
    if (title && body) {
      createArticle(title, body);
      navigate("/");
    }
  };

  console.log("NewArticle");
  return (
    <div className="container ">
      <div className="m-3">
        <h1 className=" my-4">New Article</h1>
        <div className="my-3">
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              className="my-3"
              onChange={(e) => setTitle(e.target.value)}
              label="Title"
              variant="outlined"
              color="primary"
              fullWidth
              required
              error={titleError}
            />
            <TextField
              className="my-3"
              onChange={(e) => setBody(e.target.value)}
              label="body"
              variant="outlined"
              color="primary"
              multiline
              rows={4}
              fullWidth
              required
              error={bodyError}
            />

            <Button
              className="my-3"
              type="submit"
              color="primary"
              variant="contained"
            >
              Submit
            </Button>
          </form>
          <br />
          <Link to="/">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default NewArticle;
