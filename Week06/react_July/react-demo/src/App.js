import React, { Component } from "react";
import "./App.css";
import Hello from "./components/Hello";
import EventBind from "./components/EventBind";

import styles from "./appStyles.module.css";
import "./appStyles.css";

import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="success">SUCCESS</h1>
        <h1 className={styles.error}>ERROR</h1>
        {/* <Hello name="Bruce" heroName="Batman">
          <p>This is from the first children prop</p>
          <p>This is from the second children prop</p>
        </Hello>
        <Hello name="Diana" heroName="Wonder Women">
          <button>CLICK</button>
        </Hello>
        <Hello name="Clark" heroName="SuperMan" /> */}
        {/* <EventBind></EventBind> */}
        <Form></Form>
      </div>
    );
  }
}

export default App;
