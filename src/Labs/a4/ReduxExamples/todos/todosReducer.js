import { createSlice } from "@reduxjs/toolkit";

const initialState = {    // declare initial state of reducer
  todos: [                // moved here from TodoList.js
    { id: "1", title: "Learn React" },    // todos has default todos
    { id: "2", title: "Learn Node" },
  ],
  todo: { title: "Learn Mongo" },  // todo has default todo
};
const todosSlice = createSlice({    // create slice
  name: "todos",    // name slice
  initialState,     // configure store's initial state
  reducers: {       // declare reducer functions
    addTodo: (state, action) => {    //addTodo reducer function, action contains new todo. newTodos
        // copy old todos, append new todo in action.payload, override id as timestamp     
      const newTodos = [
          ...state.todos,
        { ...action.payload, id: new Date().getTime().toString() },
      ];
      state.todos = newTodos;         // update todos
      state.todo = { title: "" };     // clear todo
    },
    deleteTodo: (state, action) => {
      // // deleteTodo reducer function, action contains todo's ID to filter out of newTodos
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newTodos;
    },
    updateTodo: (state, action) => {
      // updateTodo reducer function, rebuilding newTodos by replacing old todo with new todo in action.payload
      const newTodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.todos = newTodos;
      state.todo = { title: "" };
    },
    setTodo: (state, action) => { 
      // setTodo reducer functionbto update todo state variable
      state.todo = action.payload;
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;   // export reducer functions
export default todosSlice.reducer;      // export reducer for store