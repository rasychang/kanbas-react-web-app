import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";


function TodoItem({   // breaks out todo item
    todo,             // todo to render

// remove dependency with parent component
//   deleteTodo,       // event handler to remove todo
//    setTodo           // event handler to select todo
  }) {
    const dispatch = useDispatch();   // create dispatch instance to invoke reducer functions
    return (
      <li key={todo.id} className="list-group-item">

        {/* invoke delete todo with ID */}
        {/* <button onClick={() => deleteTodo(todo.id)}> Delete </button> */}
        {/* invoke select todo */}
        {/* <button onClick={() => setTodo(todo)}> Edit </button> */}
        
        <button onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
        <button onClick={() => dispatch(setTodo(todo))}> Edit </button>

        {/* render todo's title */}
        {todo.title} 
      </li>
    );
  }
  export default TodoItem;