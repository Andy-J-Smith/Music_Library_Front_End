import React, { useState } from "react";
import "./App.css";
import AddSong from "./Components/AddSong/AddSong";
import "@fontsource/roboto";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const [songs, setSongs] = useState([]);

  function addNewSong(song) {
    let tempSongs = [...songs, song];
    setSongs(tempSongs);
  }

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" direction="row" spacing={1}>
        <Grid container alignItems="center" direction="row" spacing={1}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <NavBar />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item alignContent="center" xs={10}>
          <Paper className={classes.paper}>
            <AddSong />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
