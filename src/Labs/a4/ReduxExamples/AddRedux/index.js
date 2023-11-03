import { useSelector, useDispatch } from "react-redux";  // use useSelector, useDispatch to read/write to reducer
import { useState } from "react";  // use useState to maintain a and b parameters in UI
import { add } from "./addReducer";


function AddRedux() {
  const [a, setA] = useState(12);  // a and b state variables to edit parameters to add in the reducer
  const [b, setB] = useState(23);
  const { sum } = useSelector((state) => state.addReducer);  // read the sum state variable from the reducer
  const dispatch = useDispatch();  // dispatch to call add redux function
  return (
    <div className="w-25">
      <h1>Add Redux</h1>
      <h2>
        {a} + {b} = {sum} 
        {/* render local state variables a and b, as well as application state variable sum */}
      </h2>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}  //update the local component state variable a
        className="form-control"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}  // update the local component state variable b
        className="form-control"
      />
      <button
        onClick={() => dispatch(add({ a, b }))} // // on click, call add reducer function to compute the arithmetic addition of a and b, and store it in application state variable sum
        className="btn btn-primary"
      >
        Add Redux
      </button>
    </div>
  );
}
export default AddRedux;