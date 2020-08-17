import React, { Component } from "react";
import "./App.css";
import Hello from "./components/Hello";
import EventBind from "./components/EventBind";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Hello name="Bruce" heroName="Batman">
          <p>This is from the first children prop</p>
          <p>This is from the second children prop</p>
        </Hello>
        <Hello name="Diana" heroName="Wonder Women">
          <button>CLICK</button>
        </Hello>
        <Hello name="Clark" heroName="SuperMan" /> */}
        <EventBind></EventBind>
      </div>
    );
  }
}

export default App;
