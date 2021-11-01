import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <h1 onMouseOver={incrementCount}>Hover {count} Times</h1>;
  }
}

export default withCounter(HoverCounter, 1);
