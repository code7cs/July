import { EventEmitter } from "events";

import dispatcher from "./dispatcher";

class NotesStore extends EventEmitter {
  constructor() {
    super();
    this.notes = [
      { id: 1, note: "first note" },
      { id: 2, note: "second note" },
      { id: 3, note: "third note" },
    ];
  }

  createNote(note) {
    const id = Date.now();
    this.notes.push({ id, note });
    this.emit("change");
  }

  getAll() {
    return this.notes;
  }
}

const notesStore = new NotesStore();
window.notesStore = notesStore;
export default notesStore;
