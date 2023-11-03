function PassingFunctions({ theFunction }) { // function passed in as a parameter
    return (
      <div>
        <h2>Passing Functions</h2>
        <button className="btn btn-primary"
                onClick={theFunction}>
          Invoke the Function
        </button>
      </div>
    );
  }
  export default PassingFunctions;