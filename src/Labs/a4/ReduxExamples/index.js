import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import Todos from "./todos/TodoListOld";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <Todos/>
      <AddRedux/>
      <CounterRedux/>
      <HelloRedux/>
    </div>
  );
};

export default ReduxExamples;