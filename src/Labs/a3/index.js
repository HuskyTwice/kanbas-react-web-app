import JavaScript from "./JavaScript";
import DynamicStyling from "./DynamicStyling";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import {Routes, Route, Navigate} from "react-router";
import Assignment4 from "../a4";
import {useSelector} from "react-redux";

function Assignment3() {
    const {todos} = useSelector((state) => state.todosReducer);

    return (
        <div>
            <h1>Assignment 3</h1>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
            <Classes/>
            <JavaScript/>
            <DynamicStyling/>
            <Styles/>
            <ConditionalOutput/>
            <TodoItem/>
            <TodoList/>
        </div>
    );
}
export default Assignment3;