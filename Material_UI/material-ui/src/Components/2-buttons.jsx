import * as React from "react";
import { Typography, Button, Stack, Container } from "@mui/material";

export default function BasicButtons() {
  return (
    <Container size="sm">
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Stack direction="row" spacing={2} color="secondary">
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>

      <br />

      <Button
        onClick={() => console.log("you clicked me")}
        type="submit"
        variant="contained"
      >
        Submit
      </Button>

      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button> 
    </Container>
  );
}
