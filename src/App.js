import React, { useState } from 'react';
import "./App.css";
import AddSong from "./Componets/AddSong/AddSong";



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
      <h1>Test</h1>

    </div>
  );
}

export default App;
