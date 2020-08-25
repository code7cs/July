const { default: dispatcher } = require("./dispatcher");
const { Dispatcher } = require("flux");

import dispatcher from "./dispatcher";

export function createNote(note) {
  dispatcher.dispatch({ type: "CREATE_NOTE", note });
}
