import React, { useState } from "react"; // import useState
function EventObject() {
    const [event, setEvent] = useState(null); // initialize event
    const handleClick = (e) => { // on click receive event
        e.target = e.target.outerHTML; // replace target with HTML
        delete e.view; // to avoid circular reference
        setEvent(e); // set event object so it can be displayed
    };
  return (
    <div>
      <h2>Event Object</h2>
      <button id="event-button"
        onClick={(e) => handleClick(e)} // button that triggers event when clicked passes event, to handler to update variable
        className="btn btn-primary"> 
        Display Event Object
      </button>
      {/* convert event object into string to display */}
      <pre>{JSON.stringify(event, null, 2)}</pre>
    </div>
  );
}
export default EventObject;