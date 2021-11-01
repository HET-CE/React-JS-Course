import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

/* Execution Order For Mounting*/

// LifeCycleA constructor
// LifeCycleA getDerivedStateFromProps
// LifeCycleA render
// LifecycleB constructor
// LifecycleB getDerivedStateFromProps
// LifecycleB render
// LifecycleB ComponentDidMount
// LifeCycleA ComponentDidMount

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "het",
    };
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA ComponentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Patel",
    });
  };
  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
