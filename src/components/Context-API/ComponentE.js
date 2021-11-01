import React, { Component } from "react";
import { UserConsumer } from "./userContext";

export class ComponentE extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>Hello {username} From Component E</div>;
        }}
      </UserConsumer>
    );
  }
}

/* To Consume Multiple COntexts */

// return (
//     <ThemeContext.Consumer>
//         {theme => (
//             <UserContext.Consumer>
//                 {user => (
//                     <ProfilePage user = {user} theme={theme} />
//                 )}
//             </UserContext.Consumer>
//         )}
//     </ThemeContext.Consumer>
// );

export default ComponentE;
