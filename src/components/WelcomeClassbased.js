import React, { Component } from "react";

class WelcomeClassbased extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome visitor",
    };
  }

  changeTextWithArgs(heroName = "Not given") {
    this.setState({
      ...this.state,
      message: heroName,
    });
    console.log(this);
  }
  changeTextWithoutArgs = () => {
    this.setState({
      ...this.state,
      message: "you clicked without args",
    });
  };
  render() {
    return (
      <div>
        <h1>
          {this.props.name} , {this.props.heroName}
        </h1>
        <p>
          {this.props.children} | {this.state.message} |{" "}
          <button onClick={() => this.changeTextWithArgs(this.props.heroName)}>
            Click me with Args
          </button>{" "}
          |
          <button onClick={this.changeTextWithoutArgs}>
            Click me without Args
          </button>
        </p>
      </div>
    );
  }
}

export default WelcomeClassbased;
