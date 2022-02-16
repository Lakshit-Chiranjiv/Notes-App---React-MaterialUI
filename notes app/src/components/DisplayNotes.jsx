import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { Container } from '@mui/material';

const DisplayNotes = () => {

  const [notesArray,setNotesArray] = useState([]);

  useEffect(async()=>{
    let data = await axios.get('http://localhost:8000/notes');
    setNotesArray(data.data);
    await console.log(data,notesArray);
  },[]);


    return (
        <Container className="display">
          display
          <Grid container>
            {notesArray.map((v)=>{
              return <Grid item key={v.id} md={3} sm={6} xs={12} lg={4}>
                <Paper>{v.title}</Paper>
              </Grid>
            })}
          </Grid>
        </Container>
      );
};

export default DisplayNotes;
