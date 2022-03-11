import React, { useState } from "react";
import "./AddSong.css";
import '@fontsource/roboto';
import '@material-ui/core';
import { Button } from "@material-ui/core";



const AddSong = (props) => {

    const [title, setTitle]=useState('');
    const [artist, setArtist]=useState('');
    const [album, setAlbum]=useState('');
    const [release_date, setReleaseDate]=useState('');
    const [genre, setGenre]=useState('');

    function handleSong(event){
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
    <div></div>
     )
}
 
export default AddSong;