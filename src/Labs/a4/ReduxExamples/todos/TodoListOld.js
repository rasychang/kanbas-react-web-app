// old way to do it -> go to index file to see the wat using useSelector

import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([     //create todos array state variable
    { id: "1", title: "Learn React" },     //initialize with 2 todo objects
    { id: "2", title: "Learn Node"  }]);
  const [todo, setTodo] = useState({ title: "Learn Mongo" });  // create todo state variable object
  const addTodo = (todo) => {                    //event handler to add new todo
    const newTodos = [ ...todos, { ...todo,      // spread existing todos, append new todo,
      id: new Date().getTime().toString() }];    // override id
    setTodos(newTodos);                          // update todos
    setTodo({title: ""});                        // clear the todo
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);  // event handler to remove todo by their ID
    setTodos(newTodos);
  };
  const updateTodo = (todo) => {               // event handler to update todo by replacing todo by their ID
    const newTodos = todos.map((item) =>
      (item.id === todo.id ? todo : item));
    setTodos(newTodos);
    setTodo({title: ""});
  };
  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm                         // TodoForm breaks out form to add or update todo pass state variables and event handlers
            todo={todo}                   // so component can communicate with TodoList's data and functions            
            setTodo={setTodo}
            addTodo={addTodo}
            updateTodo={updateTodo}/>
        {todos.map((todo) => (
            <TodoItem                      // TodoItem breaks out todo item
                todo={todo}                // pass state variables and event handlers to
                deleteTodo={deleteTodo}    // communicate with TodoList's data and functions
                setTodo={setTodo} />
            ))}
      </ul>
    </div>
  );
}
export default TodoList;

// it was inside <ul className="list-group">  </ul>
        
      
// {/* <li className="list-group-item">
//           {/* add todo button */}
//           <button onClick={() => addTodo(todo)}> Add </button>  
//           {/* update todo button */}
//           <button onClick={() => updateTodo(todo)}> Update </button>
//           <input // input field to update todo's title
//             value={todo.title}
//             onChange={(e) =>   // for every keystroke, update the todo's title, but copy old values first
//               setTodo({
//                 ...todo,
//                 title: e.target.value,
//               })
//             }
//           />
//         </li>
//         {todos.map((todo) => (   // render all todos as line items
//           <li key={todo.id} className="list-group-item"> 
//             {/* button to delete todo by their ID */}
//             <button onClick={() => deleteTodo(todo.id)}> Delete </button>
//             {/* button to select todo to edit */}
//             <button onClick={() => setTodo(todo)}> Edit </button>
//             {todo.title}
//           </li>
//         ))} */}