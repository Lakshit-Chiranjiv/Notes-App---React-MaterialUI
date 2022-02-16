import React,{useEffect,useState} from 'react';
import axios from 'axios';

const DisplayNotes = () => {

  const [notesArray,setNotesArray] = useState([]);

  useEffect(async()=>{
    let data = await axios.get('http://localhost:8000/notes');
    setNotesArray(data.data);
    await console.log(data,notesArray);
  },[]);


    return (
        <div className="display">
          display
          {notesArray.map((v)=>{
            return <p key={v.id} >{v.title}</p>
          })}
        </div>
      );
};

export default DisplayNotes;
