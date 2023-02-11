import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);
  function addNote(newNote) {
    setNote((preNote) => {
      return [...preNote, newNote];
    });
  }
  function delet(id) {
    setNote((preNote) => {
      return preNote.filter((noteIntem, index) => {
        return id !== index;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {note.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            onDelet={delet}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
