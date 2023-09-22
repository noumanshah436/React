import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticle } from "../api/articles";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { updateArticle } from "../api/articles";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState({
    id: -1,
    title: "",
    body: "",
    created_at: "",
    updated_at: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      body: "",
    },
  });

  const handler = (data) => {
    updateArticle(id, data);
    navigate("/");
  };


  useEffect(() => {
    getArticle(id, setArticle);
  }, [id]);

  useEffect(() => {
    // set default values
    reset({
      title: article.title,
      body: article.body,
    });
  }, [article, reset]);

  return (
    <div className="container ">
      <div className="m-3">
        <h1 className=" my-4">New Article</h1>
        <div className="my-3">
          <form noValidate autoComplete="off" onSubmit={handleSubmit(handler)}>
            <div className="my-4 mb-5">
              <label className="my-1">Title</label>
              <TextField
                {...register("title", {
                  required: "This is required",
                  minLength: {
                    value: 5,
                    message: "Min length is 5",
                  },
                })}
                placeholder={article.title}
                color="primary"
                fullWidth
                required
                autoFocus
              />
              <small className="text-danger">{errors.title?.message}</small>
            </div>

            <div className="my-3">
              <label className="my-1">Body</label>
              <TextField
                {...register("body", {
                  required: "This is required",
                  minLength: {
                    value: 5,
                    message: "Min length is 5",
                  },
                })}
                placeholder={article.body}
                color="primary"
                multiline
                rows={4}
                fullWidth
                required
                autoFocus
              />
              <small className="text-danger">{errors.body?.message}</small>
            </div>

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

export default Edit;
