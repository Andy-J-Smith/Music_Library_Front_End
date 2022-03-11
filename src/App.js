import React, { useState } from "react";
import "./App.css";
import AddSong from "./Components/AddSong/AddSong";
import DisplaySong from "./Components/DisplaySong/DisplaySong";
import "@fontsource/roboto";
import "@material-ui/core";

import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);

  function addNewSong(song) {
    let tempSongs = [...songs, song];
    setSongs(tempSongs);
  }

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <nav>
            <h1>Header</h1>
          </nav>
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <AddSong />
        </div>
      </div>
   
    </div>
  );
}

export default App;
