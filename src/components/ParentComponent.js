import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };
    this.greetParent = this.greetParent.bind(this);
    this.greetHandlerWithArgs = this.greetHandlerWithArgs.bind(this);
  }

  greetParent() {
    alert(`Hello ${this.state.parentName}`);
  }

  greetHandlerWithArgs(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }
  render() {
    return (
      <div>
        <ChildComponent
          greetHandler={this.greetParent}
          greetHandlerWithArgs={this.greetHandlerWithArgs}
        />
      </div>
    );
  }
}

export default ParentComponent;
