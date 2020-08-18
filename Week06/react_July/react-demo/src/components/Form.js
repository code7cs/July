import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      topic: "",
    };
  }

  handler = (event) => {
    this.setState({ username: event.target.value });
  };

  handleTopic = (event) => {
    this.setState({ topic: event.target.value });
  };

  handleSubmit = () => {
    alert(`Input: ${this.state.username} Option: ${this.state.topic}`);
  };

  render() {
    return (
      <form action="">
        <div>
          <label htmlFor="">User Name: {this.state.username}</label>
          <input
            type="text"
            onChange={this.handler}
            value={this.state.username}
          />
        </div>
        <label>Topic: </label>
        <select value={this.state.topic} onChange={this.handleTopic}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
        </select>
        <br></br>
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
