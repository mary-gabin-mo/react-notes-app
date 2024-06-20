import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "17/06/2024"
    },{
      id: nanoid(),
      text: "This is my second note!",
      date: "17/06/2024"
    },{
      id: nanoid(),
      text: "This is my third note!",
      date: "19/06/2024"
    },{
      id: nanoid(),
      text: "This is my new note!",
      date: "20/06/2024"  
    },  
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  // Loading the notes from the local storage when the app loads
  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    // check if any notes are retrieved
    if (savedNotes !== null){
      setNotes(savedNotes);
    }

  }, []);
  // when the dependency array is empty in the effect hook, 
  //it's only going to run on the first load and won't run after that

  // Saving the notes to a local storage
  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data', // key
      JSON.stringify(notes)
    );
  }, [notes]);
  // this is a good approach because any time the notes array changes, 
  // this will trigger automatically
  // eg. if adding an edit feature, as long as you are saving the new notes, 
  // the state change will trigger this

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      {/* if darkMode, add 'dark-mode' to the className of this div */}
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
          notes={notes.filter((note) => 
            note.text.toLowerCase().includes(searchText)
          )} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}  
        />
      </div>
    </div>
  );
};

export default App;