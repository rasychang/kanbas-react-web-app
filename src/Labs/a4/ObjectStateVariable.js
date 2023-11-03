import React, { useState } from "react";


function ObjectStateVariable() {
  // declare and initialize object state variable with multiple fields
  const [person, setPerson] = useState({ name: "Peter", age: 24 }); 
  return (
    <div>
      <h2>Object State Variables</h2>
      {/* display raw JSON */}
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <input
        value={person.name}  // initialize input field with an object's field value
        onChange={(e) => setPerson({ ...person, name: e.target.value })} // update field as user types. copy old object, override specific field with new value
      />
      <input
        value={person.age}
        // The object is updated by creating new objects copied from the previous object value using the spreader operator (...person), 
        // and then overriding the name or age property with the target.value
        onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) })}
      />
    </div>
  );
}
export default ObjectStateVariable;