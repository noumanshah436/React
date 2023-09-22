import React, { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Button, TextField } from "@mui/material";

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      console.log(title, details);
    }
  };

  return (
    <div className="container">
      <div className="my-3">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            className="my-3"
            onChange={(e) => setTitle(e.target.value)}
            label="Note Title"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={titleError}
          />
          <TextField
            className="my-3"
            onChange={(e) => setDetails(e.target.value)}
            label="Details"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            fullWidth
            required
            error={detailsError}
          />

          <Button
            className="m-3"
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<ArrowRightAltIcon />}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Create;
