import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: [],
    };
  }
  getPost = (e) => {
    e.preventDefault();
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
      .then((res) => {
        this.setState((state) => {
          const title = [...state.title, res.data.title];
          return {
            id: state.id,
            title,
          };
        });
      });
    console.log(this.state.id);
  };
  handleChange = (e) => {
    this.setState({
      id: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.id}
            onChange={(e) => this.handleChange(e)}
          />
          &nbsp;&nbsp;
          <button onClick={(e) => this.getPost(e)}>Set Post</button>
        </form>
        <div>
          <ul>
            {this.state.title &&
              this.state.title.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Form;
