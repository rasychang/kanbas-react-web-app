import React from "react";
import ReduxExamples from "./ReduxExamples";
import Add from "./Add"; // import Add component
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions"; // import the component
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";

function Assignment4() {
    function sayHello(){ // implement callback function
        alert("Hello");
    }
    return (
        <div>
            <h1>Assignment 4</h1>
                <ReduxExamples/>
                <ParentStateComponent/>
                <ArrayStateVariable/>
                <ObjectStateVariable/>
                <DateStateVariable/>
                <StringStateVariables/>
                <BooleanStateVariables/>
                <Counter/>
                <EventObject/>
                {/* pass callback function as a parameter */}
                <PassingFunctions theFunction={sayHello} /> 
                <PassingDataOnEvent/>
                <ClickEvent/>
                <Add a={1} b={2} />
   
        </div>
    );
}


// initialize
// const Assignment4 = () =>{
//     return(
//         <>
//             <h1>Assignment 4</h1>
//         </>
//     );
// };

export default Assignment4;