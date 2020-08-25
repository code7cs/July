import React, { Component } from "react";
import Note from "./Note";
import NotesStore from "../NotesStore";

export default class NoteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: NotesStore.getAll(),
    };
  }

  getTodos = () => {
    console.log("onChange@NoteList");
    this.setState({ notes: NotesStore.getAll() });
  };

  componentDidMount() {
    NotesStore.on("change", this.getTodos);
  }

  render() {
    const { notes } = this.state;
    const NoteComponents = notes.map((n) => {
      return <Note key={n.id} note={n.note}></Note>;
    });
    return <ul>{NoteComponents}</ul>;
  }
}
