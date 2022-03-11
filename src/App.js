import React, { useState } from "react";
import "./App.css";
import AddSong from "./Components/AddSong/AddSong";
import "@fontsource/roboto";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar"

function App() {
  const [songs, setSongs] = useState([]);

  function addNewSong(song) {
    let tempSongs = [...songs, song];
    setSongs(tempSongs);
  }

  return (
    <div className="container">
      <NavBar/>
      <div></div>
   

      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <AddSong />
        </div>
      </div>
   
    </div>
  );
}

export default App;
