import React from "react";
import "./DisplaySong.css";

const DisplaySong = (props) => {
  return (
    <div className="container">
      <div>
        {props.parentSongs.map((song, index) => {
          return (
            <div key={index}>
              <div className="title">{song.title}</div>
              <div className="artist">{song.artist}</div>
              <div className="album">{song.album}</div>
              <div className="release_date">{song.release_date}</div>
              <div className="genre">{song.genre}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplaySong;
