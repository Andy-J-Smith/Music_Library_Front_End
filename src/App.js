import React, { useState, useEffect } from "react";
import "./App.css";
import AddSong from "./Components/AddSong/AddSong";
import "@fontsource/roboto";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";
import  Image  from './images/jeremy.jpg';
import axios from "axios";

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

  useEffect(()=>{
    getAllSongs();
  },[])

 

  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/music/songs/', newSong);
    if (response.status === 201){
      await getAllSongs();
      
    } 

  }

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/songs/');
    setSongs();
    console.log(response.data);
    
  }



  return (
    <div className={classes.root}>
      <Grid container alignItems="center" direction="row" spacing={1}>
        <Grid container alignItems="center" direction="row" spacing={1}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <NavBar />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <AddSong createSong={createSong} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
