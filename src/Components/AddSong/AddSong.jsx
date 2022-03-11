import React, { useState } from "react";
import "./AddSong.css";
import "@fontsource/roboto";
import "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";


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
      <label>Title</label>
      <input
        type="text"
        id="standard-adornment-weight"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <div></div>
      <label>Artist</label>
      <input
        type="text"
        id="standard-adornment-weight"
        value={artist}
        onChange={(event) => setArtist(event.target.value)}
      ></input>
      <div></div>
      <label>Album</label>
      <input
        type="text"
        id="standard-adornment-weight"
        value={album}
        onChange={(event) => setAlbum(event.target.value)}
      ></input>
      <div></div>
      <label>Release Date</label>
      <input
        type="date"
        id="standard-adornment-weight"
        value={release_date}
        onChange={(event) => setReleaseDate(event.target.value)}
      ></input>
      <div></div>
      <label>Genre</label>
      <input
        type="text"
        id="standard-adornment-weight"
        value={genre}
        onChange={(event) => setGenre(event.target.value)}
      ></input>
      <div></div>
      <button
        onSubmit={handleSong}
        variant="contained"
        color="primary"
        size="small"
      >
        Save
      </button>
    </form>
  );
};

export default AddSong;
