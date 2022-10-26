import React, { Component } from "react";

class MyNewComponent extends Component {
  //declare constructor to override our default constructor so that we can initially set the state object
  constructor(props) {
    // gives us all the functionality of the default constructor that comes with Component
    super(props);

    this.state = {
      message: "Welcome to the site",
      position: "on",
    };
  }

  logout = () => {
    this.setState({ message: "you have logged out" });
  };

  switch = () => {
    if (this.state.position === "on") {
      this.setState({ position: "off" });
    } else {
      this.setState({ position: "on" });
    }
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.logout}>logout</button>
        <button onClick={this.switch}>{this.state.position}</button>
      </div>
    );
  }
}

export default MyNewComponent;
