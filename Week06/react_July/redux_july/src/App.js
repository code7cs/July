import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "../src/components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer></CakeContainer>
      </div>
    </Provider>
  );
}

export default App;
