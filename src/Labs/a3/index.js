import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Todos from "./todos";
import { useSelector } from "react-redux";   // import useSelector to retrieve data from reducer


function Assignment3() {
    const { todos } = useSelector((state) => state.todosReducer);  // extract todos from reducer
    return (
        <div className="container">
            <h1>Assignment 3</h1>
                <ul className="list-group">
                    {todos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                    {todo.title}
                </li>
                ))}
                </ul>
                <Todos/>
                <ConditionalOutput/>
                <Styles/>
                <Classes/>
                <PathParameters/>
                <JavaScript/>
        </div>
    );
  }
  export default Assignment3;