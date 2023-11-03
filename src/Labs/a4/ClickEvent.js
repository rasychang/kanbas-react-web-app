function ClickEvent() { // declare a function to handle the event
    const hello = () => {
      alert("Hello World!");
    };
    const good = () => {
      alert("Life is Good!");
    };
    return (
      <div>
        <h2>Click Event</h2>
            {/* configure the function call */}
            <button onClick={hello}> Click Hello 1 </button> 
            {/* wrap in function if you need to pass parameters */}
            <button onClick={() => hello()}> Click Hello 2 </button>
            {/* wrap in {} if you need more than one line of code */}
            <button onClick={() => { hello(); good();}}> Click Hello 3 </button>
      </div>
    );
  }
  export default ClickEvent;