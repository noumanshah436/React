import React, { Component } from "react";

export default class AppClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 100,
      isMale: true,
    };
  }

  render() {
    return (
      <div>
        <h4>My name is {this.state.name}</h4>
        <h4>My age is {this.state.age}</h4>
        <h4>I am is {this.state.isMale ? "Male" : "Female"}</h4>
        <h4>I am feeling {this.props.emotion}</h4>
      </div>
    );
  }
}
