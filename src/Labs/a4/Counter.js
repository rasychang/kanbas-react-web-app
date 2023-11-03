import React, { useState } from "react";  // import useState

function Counter() {
//   let count = 7; // declare and initialize
  const [count, setCount] = useState(7);  // create and initialize state variable
  
  console.log(count);
  return (
    <div>
        {/* render variable */}
      <h2>Counter: {count}</h2>
        {/* variable updates on console but fails to update the DOM as desired */}
        {/* <button onClick={() => { count++; console.log(count);  }}> Up </button> */}
        {/* <button onClick={() => { count--; console.log(count); }}> Down </button> */}
        <button onClick={() => setCount(count + 1) }> Up </button>
        <button onClick={() => setCount(count - 1)}> Down </button>
    </div>
  );
}
export default Counter;