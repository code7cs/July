import React, { Component } from "react";

class Hello extends Component {
  render() {
    return (
      <div>
        <h1>
          Greeting {this.props.name} a.k.a {this.props.heroName}
        </h1>
        {this.props.children}
      </div>
    );
  }
}
export default Hello;
