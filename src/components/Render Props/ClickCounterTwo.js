import React, { Component } from "react";

export class ClickCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <button onClick={incrementCount}>
        Clicked {count} times (Using Render Props)
      </button>
    );
  }
}

export default ClickCounterTwo;
