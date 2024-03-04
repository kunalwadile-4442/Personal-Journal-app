import React, { useState, useEffect } from 'react';
import NoteC from '../Note/NoteC';
import Sidebar from '../Note/Sidebar';
import '../Style/Note.css';

function Note(props) {
  const [notes, setNotes] = useState([
    { text: "", time: "", color: "#fe9b72" }
  ]);

  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);

    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes.length > 0 ? tempNotes : []);
  };

  useEffect(() => {
    const updateRealTime = () => {
      setNotes(prevNotes => {
        if (prevNotes.length > 0) {
          const tempNotes = [...prevNotes];
          const now = new Date();
          const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };  
          tempNotes[0].time = now.toLocaleString('en-US', options);
          return tempNotes;
        }
        return prevNotes;
      });
    };

    const intervalId = setInterval(updateRealTime, 1000);

    return () => clearInterval(intervalId);
  }, [notes]);

  const reverseArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };

  const addNote = (color) => {
    const now = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };

    const newNote = {
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: now.toLocaleString('en-US', options),
      color,
    };

    setNotes(prevNotes => [...prevNotes, newNote]); 
  };

  const note = reverseArray(notes);

  return (
   
    <div className='note-container'>
      <h2 className='note-title'>Notes</h2>
      <Sidebar addNote={addNote} />

      <div className="note-container_notes">
        {notes?.length > 0 ? note.map((item) => (
          <NoteC key={item.id} note={item} deleteNote={deleteNote} />
        )) : <h2>No Notes Present</h2>}
      </div>
    </div>
    
  );
}

export default Note;
