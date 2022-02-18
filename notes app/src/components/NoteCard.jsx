import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';
import { purple,green,yellow,blue,teal } from '@mui/material/colors';


const useStyles = makeStyles({
    categoryClass: {
        borderLeft: (noteObj) => {
            if(noteObj.category == 'Finance Related')
                return '5px solid red'
            else if(noteObj.category == 'Schedule')
                return '5px solid #ff9900'
            else if(noteObj.category == 'Assignments')
                return '5px solid #4dff4d'
            else if(noteObj.category == 'Reminders')
                return '5px solid #4d94ff'
        }
    },
    avatarClass: {
        backgroundColor: (noteObj) => {
            if(noteObj.category == 'Finance Related')
                return green[500]+' !important'
            else if(noteObj.category == 'Schedule')
                return purple[500]+' !important'
            else if(noteObj.category == 'Assignments')
                return teal[500]+' !important'
            else if(noteObj.category == 'Reminders')
                return blue[500]+' !important'
            else
                return yellow[500]+' !important'
        }
    }
})

const NoteCard = ({noteObj,deleteNote}) => {
    const classes = useStyles(noteObj);
  return (
    <div>

        <Card elevation={4} className={classes.categoryClass}>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatarClass}>
                        {noteObj.category[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton onClick={()=>{deleteNote(noteObj.id)}}>
                        <DeleteIcon color='error'/>
                    </IconButton>
                }
                title={noteObj.title}
                subheader={noteObj.category}
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {noteObj.details}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default NoteCard