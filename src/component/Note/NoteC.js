// NoteC.js
import React from 'react';
import '../Note/NoteC.css';
import DeleteIcon from '@mui/icons-material/Delete';


function NoteC(props) {
  return (
    <>
      <div>
        <div className='note' style={{ backgroundColor: props.note.color }}>
          <textarea className='note_text' placeholder='Enter your text' defaultValue={props.note.text} style={{ backgroundColor: props.note.color }} />
          <p>{props.note.time}</p>
          <div className="DeleteIcon">
          <DeleteIcon onClick={()=> props.deleteNote(props.note.id)}  />

          </div>

        </div>
      </div>
    </>
  );
}

export default NoteC;