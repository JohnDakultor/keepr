import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { DeleteOutlined } from "@mui/icons-material";

// const Item = styled(Card)(() => ({
//   backgroundColor: "#50727B",
//   padding: 8,
//   textAlign: "center",
//   color: "#FFF455",
//   borderRadius: 10,
//   boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
// }));

export default function Cards({ note, deleteNote }) {
  return (
    <div>
      <Card sx={{  borderRadius: 5, boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)", backgroundColor: "#FFAF45" }}>
        <CardHeader
          action={
            <IconButton onClick={() => deleteNote(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {note.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
