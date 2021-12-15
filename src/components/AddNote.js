import {useState} from 'react';

const AddNote=({handleAddNote})=> {
const [noteText, setNoteText] = useState('')
/*اینجا تعداد کاراکترارو میشماره و از 200 کم میکنه characterLimit*/
const characterLimit=200;

const handleChange=(event)=>{
    if(characterLimit-event.target.value.length>=0)
    {setNoteText(event.target.value);
    }

};

const handleSaveClick =()=>{
if(noteText.trim().length>0){
handleAddNote(noteText)
setNoteText('');
}
};



 return (
        <div className='note new'>
            <textarea 
             rows="8"
              cols="10"
             placeholder='Type your note...'
             value={noteText}
             onChange={handleChange}
             ></textarea>
            <div className="note-footer">
                <small>{characterLimit-noteText.length} Remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote
