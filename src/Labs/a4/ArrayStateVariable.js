import React, { useState } from "react";

function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);  // declare array state
  const addElement = () => { // event handler appends random number at end of array 
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index) => { // event handler removes element by index 
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div>
      <h2>Array State Variable</h2>
      {/* button calls addElement to append to array */}
      <button onClick={addElement}>Add Element</button> 
      <ul>
        {array.map((item, index) => ( // iterate over array items
          <li key={index}>
            {item}
            {/* button to delete element by its index */}
            <button onClick={() => deleteElement(index)}>
              Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ArrayStateVariable;