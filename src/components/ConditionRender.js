import React, { Component } from "react";

class ConditionRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // 1st way for conditional rendering
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Het</div>;
    // } else {
    //   message = <div>Welcome unknown</div>;
    // }
    // return <div>{message}</div>;
    /*
     *
     *
     */
    // 2nd way for conditional rendering
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Het</div>;
    // } else {
    //   return <div>Welcome unknown</div>;
    // }
    /*
     *
     *
     */
    // 3rd way for conditional rendering    (Recommended)
    return this.state.isLoggedIn ? (
      <div>Welcome Het</div>
    ) : (
      <div>Welcome unknown</div>
    );
    /*
     *
     *
     */
    // 4th way for conditional rendering (Short circuit)
    // this.state.isLoggedIn && <div>Welcome Het</div>;
    /*
     *
     *
     */
    // return (
    //     <div>

    //     </div>
    // )
  }
}

export default ConditionRender;
