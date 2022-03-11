import React, { useState } from 'react';
import "./App.css";
import AddSong from "./Components/AddSong/Components";
import '@fontsource/roboto';
import '@material-ui/core';
import { Button } from "@material-ui/core";


import './App.css';

function App() {
  const [songs, setSongs] = useState([

  ]);

  function addNewSong(song){
    let tempSongs = [...songs, song];
    setSongs(tempSongs);
  }


  return (
    <div className="App">
      <Button variant='contained' color='primary'>
      Test Button </Button>

    </div>
  );
}

export default App;
