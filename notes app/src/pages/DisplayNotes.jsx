import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { Container } from '@mui/material';
import NoteCard from '../components/NoteCard';

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

    return (
        <Container className="display">
          display
          <Grid container spacing={4}>
            {notesArray.map((noteObj)=>{
              return <Grid item key={noteObj.id} md={3} sm={6} xs={12} lg={4}>
                <NoteCard noteObj={noteObj} deleteNote={deleteNote} />
              </Grid>
            })}
          </Grid>
        </Container>
      );
};

export default DisplayNotes;
