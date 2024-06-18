import { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is my first note!",
    date: "17/06/2024"
  }]);

  return (
    <div className='container'>
      <NotesList />
    </div>
  )
};

export default App;