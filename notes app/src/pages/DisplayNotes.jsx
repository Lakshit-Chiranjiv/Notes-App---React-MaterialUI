import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { Container } from '@mui/material';
import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';
import './../css/displayNotes.style.css';

const DisplayNotes = () => {

  const [notesArray,setNotesArray] = useState([]);

  useEffect(async()=>{
    let data = await axios.get('http://localhost:8000/notes');
    setNotesArray(data.data);
    await console.log(data,notesArray);
  },[]);

  const deleteNote = async(passedId) =>{
    await axios.delete(`http://localhost:8000/notes/${passedId}`);
    setNotesArray(notesArray.filter((note)=>{
      return note.id != passedId;
    }))
  }

  const tileBreakPoints = {
    default: 3,
    1100: 2,
    700: 1
  }

    return (
        // <Container className="display">
        //   <Grid container spacing={4}>
        //     {notesArray.map((noteObj)=>{
        //       return <Grid item key={noteObj.id} md={6} xs={12} lg={4}>
        //         <NoteCard noteObj={noteObj} deleteNote={deleteNote} />
        //       </Grid>
        //     })}
        //   </Grid>
        // </Container>
        <Container className="display">
          <Masonry
              breakpointCols={tileBreakPoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
          >
            {notesArray.map((noteObj)=>{
              return <div key={noteObj.id}>
                <NoteCard noteObj={noteObj} deleteNote={deleteNote} />
              </div>
            })}
          </Masonry>
        </Container>
      );
};

export default DisplayNotes;
