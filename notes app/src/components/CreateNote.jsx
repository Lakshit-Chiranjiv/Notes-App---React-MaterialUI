import React from 'react';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState,useEffect } from 'react';
import axios from 'axios';

const useStyles = makeStyles({
  headings: {
    fontWeight: '500 !important',
    display: 'block !important'
  },
  fields: {
    margin: '24px auto !important',
    display: 'block !important'
  },
  smalltext: {
    fontSize: '12px !important'
  },
});
 
const CreateNote = () => {

  const [noteTitle,setNoteTitle] = useState('');
  const [noteDetails,setNoteDetails] = useState('');
  const [noteTitleError,setNoteTitleError] = useState(false);
  const [noteDetailsError,setNoteDetailsError] = useState(false);
  const [errorMsg,setErrorMsg] = useState(false);
  const [noteCategory,setNoteCategory] = useState('Todos');


  useEffect(() => {
    setNoteTitleError(noteTitle==='');
    setNoteDetailsError(noteDetails==='');
    if(noteTitle!=='' && noteDetails!=='')
    setErrorMsg(false);
  },[noteTitle,noteDetails]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setNoteTitleError(noteTitle==='');
    setNoteDetailsError(noteDetails==='');
      if(noteTitle==='' || noteDetails==='')
        setErrorMsg(true);
      else{
        console.log(noteTitle,noteDetails,noteCategory);
        await axios.post('http://localhost:8000/notes', {
          title: noteTitle,
          details: noteDetails,
          category: noteCategory
        });
        console.log("done");
      }
        
    };

    const classes = useStyles();
    return (
      <Container className="create">

      <Typography
        className={classes.headings}
        variant='h5'
        component='h2'
        color='textSecondary'
        gutterBottom
      >
        Create New Notes
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          className={classes.fields}
          label='note title'
          fullWidth
          required
          color={(noteTitleError)?'error':'success'}
          onChange={(e)=>setNoteTitle(e.target.value)}
        />
        <TextField
          className={classes.fields}
          label='note details'
          color={(noteDetailsError)?'error':'success'}
          fullWidth
          required
          multiline
          rows={5}
          onChange={(e)=>setNoteDetails(e.target.value)}
        />

        {errorMsg && 
        <Typography
        className={classes.smalltext}
        variant='h6'
        component='h6'
        color='error'
        gutterBottom
      >
        Fill out all the details!!
      </Typography>
        }

        <FormControl className={classes.headings}>
          <FormLabel>note category</FormLabel>
          <RadioGroup value={noteCategory} onChange={(e)=>setNoteCategory(e.target.value)}>
          
            <FormControlLabel value="Finance Related" control={<Radio/>} label="Finance Related" />
            <FormControlLabel value="Reminders" control={<Radio/>} label="Reminders" />
            <FormControlLabel value="Todos" control={<Radio/>} label="Todos" />
            <FormControlLabel value="Assignments" control={<Radio/>} label="Assignment" />
            <FormControlLabel value="Schedule" control={<Radio/>} label="Schedule" />

          </RadioGroup>
        </FormControl>

        <Button 
          type='submit' 
          variant='contained' 
          color='primary'
          endIcon={<KeyboardDoubleArrowRightIcon/>}
          // onClick={()=>{
          //   if(noteTitle==='' || noteDetails==='')
          //     setErrorMsg(true);
          //   else
          //     console.log(noteTitle,noteDetails,noteCategory);
          // }}
          >
              SUBMIT
        </Button>

      </form>


    </Container>
      );
};

export default CreateNote;
