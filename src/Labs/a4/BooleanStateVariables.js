import React, { useState } from "react";  // import useState

function BooleanStateVariables() {
  const [done, setDone] = useState(true);  // declare and initialize boolean state variable
  return (
    <div>
      <h2>Boolean State Variables</h2>

      {/* render content based on boolean state variable value*/}
      <p>{done ? "Done" : "Not done"}</p>

      {/* change state variable value when handling events like clicking a checkbox */}
      <label className="form-control">
        <input type="checkbox" checked={done} onChange={() => setDone(!done)} /> Done
      </label>
      
      {/* render content based on boolean state variable value*/}
      {done && <div className="alert alert-success"> Yay! you are done</div>}
    </div>
  );
}
export default BooleanStateVariables;