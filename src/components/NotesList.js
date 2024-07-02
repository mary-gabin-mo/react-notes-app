import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({ 
    notes, 
    handleAddNote, 
    handleDeleteNote, 
}) => {
    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}    
                />
            ))}
            <AddNote handleAddNote={handleAddNote} /> 
            {/* above = prop drilling: the process of passing things through to the next level
              - if using often, might be worthwhile to consider using context API*/}
        </div>
    );
};

export default NotesList;