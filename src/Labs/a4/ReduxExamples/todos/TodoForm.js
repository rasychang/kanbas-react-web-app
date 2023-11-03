import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";


function TodoForm(){
//     ({   // breaks out todo form
//     todo,             // todo to be added or edited
//     setTodo,
//     addTodo,
//     updateTodo
//   })

    // retrieve todo from reducer create dispatch instance to invoke reducer functions
    const { todo } = useSelector((state) => state.todosReducer); 
    const dispatch = useDispatch();

    return (
      <li className="list-group-item">
        {/* <button onClick={() => addTodo(todo)}> Add </button>
            <button onClick={() => updateTodo(todo)}> Update </button> */} 

        {/* wrap reducer functions with dispatch */}
        <button onClick={() => dispatch(addTodo(todo))}> Add </button>
        <button onClick={() => dispatch(updateTodo(todo))}> Update </button>

        
        <input              // input field to update
          value={todo.title}
        //   onChange={ (e) => setTodo({ ...todo, title: e.target.value }) }   // update title on each key stroke
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}  // wrap reducer functions with dispatch
        />
      </li>
    );
  }
  export default TodoForm;