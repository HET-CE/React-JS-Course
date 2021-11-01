import React, { Component } from "react";
import ComponentE from "./ComponentE";
import UserContext from "./userContext";

export class ComponentD extends Component {
  render() {
    return (
      <div>
        Access value by UserConext {this.context} in ComponentD
        <ComponentE />
      </div>
    );
  }
}

ComponentD.contextType = UserContext;

export default ComponentD;
