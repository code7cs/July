import React, { Component } from "react";

export default class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { note } = this.props;

    return <li>{note}</li>;
  }
}
