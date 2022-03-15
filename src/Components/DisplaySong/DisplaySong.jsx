import React from "react";
import "./DisplaySong.css";
import { Table, TableContainer, Paper } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import { HdrStrongSharp } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const DisplaySong = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Release Date</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {props.songs.map((songs, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{songs.title}</td>
              <td>{songs.artist}</td>
              <td>{songs.album}</td>
              <td>{songs.release_date}</td>
              <td>{songs.genre}</td>
              {/* <Button onSubmit={deleteSong} variant="contained" color="secondary" type="submit">
                Delete
              </Button> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplaySong;
