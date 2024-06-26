import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent</button>
      <button onClick={() => props.greetHandlerWithArgs("child")}>
        Greet Parent Args
      </button>
    </div>
  );
}

export default ChildComponent;
