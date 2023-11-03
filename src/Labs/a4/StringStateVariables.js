import React, { useState } from "react";  // import useState

function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");  // declare and initialize state variable
  
  return (
    <div>
      <h2>String State Variables</h2>
      {/* render string state variable initialize a text input field with the state variable*/}
      <p>{firstName}</p>
      <input
        className="form-control"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)} // update the state variable at each key stroke
      />
    </div>
  );
}
export default StringStateVariables;