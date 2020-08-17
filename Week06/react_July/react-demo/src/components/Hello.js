import React, { Component } from "react";

class Hello extends Component {
  render() {
    console.log(this.props.children);
    return (
      <div>
        <h1>
          Greeting {this.props.name} a.k.a {this.props.heroName}
        </h1>
        {this.props.children && this.props.children[0]}
      </div>
    );
  }
}
export default Hello;
