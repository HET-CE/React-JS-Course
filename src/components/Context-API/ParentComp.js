import React, { Component } from "react";
import ComponentC from "./ComponentC";
import { UserProvider } from "./userContext";

class ParentComp extends Component {
  render() {
    return (
      <div>
        <UserProvider value="het Patel">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default ParentComp;
