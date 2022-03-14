import React, { useState } from "react";
import "./AddSong.css";
import "@fontsource/roboto";
import "@material-ui/core";
import { TextField, Grid, Button } from "@material-ui/core";

const AddSong = (props) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [release_date, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

  function handleSong(event) {
    event.preventDefault();
    let newSong = {
      title: title,
      artist: artist,
      album: album,
      release_date: release_date,
      genre: genre,
    };
    console.log(newSong);
  }
  return (
    <form onSubmit={handleSong}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="row"
      >
        <Grid item>
          <TextField
            id="title-input"
            name="title"
            label="Title"
            type="text"
            value={handleSong.title}
            onChange={(event) => setTitle(event.target.value)}
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            id="artist-input"
            name="artist"
            label="Artist"
            type="text"
            value={handleSong.artist}
            onChange={(event) => setArtist(event.target.value)}
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            id="title-album"
            name="album"
            label="Album"
            type="text"
            value={handleSong.album}
            onChange={(event) => setAlbum(event.target.value)}
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            id="release_date-input"
            name="release_date"
            label="Release Date"
            type="date"
            value={handleSong.release_date}
            onChange={(event) => setReleaseDate(event.target.value)}
          ></TextField>
        </Grid>
        <Grid item>
          <TextField
            id="genre-input"
            name="genre"
            label="Genre"
            type="text"
            value={handleSong.genre}
            onChange={(event) => setGenre(event.target.value)}
          ></TextField>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default AddSong;
