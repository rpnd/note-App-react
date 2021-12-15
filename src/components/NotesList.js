import Note from "./Note";
import AddNote from "./AddNote";

const NotesList=({notes,handleAddNote,handleDeleteNote})=> {
    return (
        <div className='notes-list'>
            {notes.map((note)=>(
            <Note
             id={note.id} 
            text={note.text} 
            data={note.data}
            handleDeleteNote={handleDeleteNote}
            />
            ))}
           
         <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
};

export default NotesList;
