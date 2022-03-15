import {React, useState} from "react";
import { Button } from "@material-ui/core";
import bootstrap from "bootstrap";




const UpdateSong = (props) => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    // async function updateSong(id) {
    //     let response = await axios.put(
    //       `http://127.0.0.1:8000/api/music/songs/${id}`
    //     );
    //   }
    
    return ( 
        <>
        <Button variant="primary" onClick={handleShow} backdrop='static'>
        Edit</Button>
      
        </>
    );
}
 
export default UpdateSong;