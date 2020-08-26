import React, { Component } from "react";
import * as d3 from "d3";

export class Char1 extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {};
  }

  componentDidMount() {
    let accessToRef = d3.select(this.myRef.current);
    accessToRef.style("background-color", "green");
  }

  render() {
    return <div ref={this.myRef}>Testing Refs</div>;
  }
}

export default Char1;
