import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Note from "./components/Note";
import NoteList from "./components/NoteList";

function App() {
  return (
    <div className="App">
      <NoteList />
    </div>
  );
}

export default App;
