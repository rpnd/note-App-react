import { useState,useEffect } from "react";
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
const App =()=>{
const [notes, setNotes] = useState([
{
id:nanoid(),
  text:"this is my first note!",
  data:"15/04/2021"
},
{
  id:nanoid(),
    text:"this is my second note!",
    data:"21/04/2021"
  },
  {
    id:nanoid(),
      text:"this is my third note!",
      data:"28/04/2021"
    },
    {
      id:nanoid(),
        text:"this is my new note!",
        data:"30/04/2021"
      },
]);



const[searchText, setSearchText]=useState('')
const[darkMode,setDarkMode]=useState('false ') 

useEffect(() => {
        const savedNotes=JSON.parse
          (localStorage.getItem
             ( 'react-note-app-data')
          );
           if(savedNotes){
          setNotes(savedNotes);
  }
}, []);

   useEffect(() => {

  localStorage.setItem(
    'react-note-app-data',
     JSON.stringify(notes)
     );
  }
      , [notes]);

const addNote=(text)=>{
const date=new Date();
const newNote={
  id:nanoid(),
  text:text,
  date:date.toLocaleDateString()
}
const newNotes=[...notes,newNote];
setNotes(newNotes);
}
const deleteNote=(id)=>{
 const newNotes= notes.filter((note)=>note.id !==id);
 setNotes(newNotes);
}

  return (<div className={`${darkMode && 'dark-mode'}`}>
  <div className="container">
    <Header handleToggleDarkMode={setDarkMode}/>
    <Search handleSearchNote={setSearchText}/>
    <NotesList
     notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
     handleAddNote={addNote}
    handleDeleteNote={deleteNote}
    />
  </div>
  </div>
  );
};

export default App;