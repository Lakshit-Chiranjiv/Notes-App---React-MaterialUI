import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const NoteCard = ({noteObj,deleteNote}) => {
  return (
    <div>
        {/* <h4>{noteObj.title}</h4> */}
        <Card elevation={4}>
            <CardHeader
                action={
                    <IconButton onClick={()=>{deleteNote(noteObj.id)}}>
                        <DeleteIcon color='error'/>
                    </IconButton>
                }
                title={noteObj.title}
                subheader={noteObj.category}
            />

            <CardContent>
                <Typography variant="body4" color="text.secondary">
                    {noteObj.details}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default NoteCard