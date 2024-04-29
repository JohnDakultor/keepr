import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const history = useNavigate();
  

  const SubmitEvent = (e) => {
    e.preventDefault();

    if (title === "" || description === "") {
      alert("Please fill all the fields");
    } else {
      console.log(title, description);
    }
    if (title && description) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then(() => history("/note"));
    }
  };

  return (
    <Container 
    
    >
      <form noValidate autoComplete="off" onSubmit={SubmitEvent}>
        <Typography variant="h3" component="div" sx={{ mt: 20, mb: 2 }}>
          Create Note
        </Typography>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          id="outlined-multiline-static"
          label="title"
          multiline
          rows={2}
          fullWidth
          sx={{ mt: 2, mb: 2 }}
          required
        />

        <TextField
          onChange={(e) => setDescription(e.target.value)}
          id="outlined-multiline-static"
          label="description"
          multiline
          rows={10}
          fullWidth
          sx={{ mt: 2, mb: 2 }}
          required
        />
        <Button type="submit" variant="contained" sx={{ mt: 2, mb: 5 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
}
