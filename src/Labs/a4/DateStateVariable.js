import React, { useState } from "react";


function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date());
  // The dateObjectToHtmlDateString function can convert a Date object 
  // into the YYYY-MM-DD format expected by the HTML date input field.
  const dateObjectToHtmlDateString = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
      date.getMonth() + 1
    }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
  };
  return (
    <div>
      <h2>Date State Variables</h2>
      {/* display raw date object */}
      <h3>{JSON.stringify(startDate)}</h3> 
      {/* display in YYYY-MM-DD format for input of type date */}
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>
      <input
        className="form-control"
        type="date"
        value={dateObjectToHtmlDateString(startDate)}
        // onChange attribute which updates the new date using the setStartDate mutator function
        onChange={(e) => setStartDate(new Date(e.target.value))}
      />
    </div>
  );
}
export default DateStateVariable;