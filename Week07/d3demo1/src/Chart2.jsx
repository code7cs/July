import React, { Component } from "react";
import * as d3 from "d3";

export class Chart2 extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {};
  }

  componentDidMount() {
    let accessToRef = d3.select(this.myRef.current);
    accessToRef.style("background-color", "white");
    this.drawChart();
  }

  drawChart() {
    const data = [12, 34, 64, 23, 12, 45];
    const h = 400;
    const w = 500;

    const accessToRef = d3
      .select(this.myRef.current)
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .attr("background-color", "#cccccc")
      .style("padding", 10)
      .style("margin-left", 50);

    accessToRef
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 5 * d)
      .attr("width", 65)
      .attr("height", (d, i) => 5 * d)
      .attr("fill", "orangered");
  }

  render() {
    return <div ref={this.myRef}></div>;
  }
}

export default Chart2;
