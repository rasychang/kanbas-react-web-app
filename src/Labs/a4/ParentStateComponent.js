import React, { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";


function ParentStateComponent() {
  const [counter, setCounter] = useState(456);
  return (
    <div>
      <h2>Counter {counter}</h2>
      <ChildStateComponent
        counter={counter}
        setCounter={setCounter} />
    </div>
  );
}
export default ParentStateComponent;