import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Emoji from "../objects/emoji";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

// const emoji = Emoji.map(emoji =>  <Cards
//     key={emoji.id}
//     emoji={emoji.emoji}
//     name={emoji.name}
//     discription={emoji.discription}
// />)

export default function Note() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []);

  const deleteNote = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <>
      <CssBaseline />
      <Container>
        <Box sx={{ m: 2 }}>
          <Grid container spacing={3} sx={{ marginTop: 20 }}>
            {notes?.map((note) => (
              <Grid item xs={12} sm={6} md={3}  key={note.id}>
                <Cards
                  title={note.title}
                  description={note.description}
                  note={note}
                  deleteNote={deleteNote}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
