import React, {useState, useEffect} from "react";
import axios from "axios";

function WorkingWithArrays() {
    // const BASE_URL = "http://localhost:4000";
    const BASE_URL = "https://kanbas-node-server-app-mitf.onrender.com";
    const [errorMessage, setErrorMessage] = useState(null);
    const API = `${BASE_URL}/a5/todos`;
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false
    });
    const [todos, setTodos] = useState([]);

    // Old syntax
    const fetchTodosPromise = () => {
        const promise = axios.get(API);
        promise.then((response) => {
            console.log(response.data);
            setTodos(response.data);
        });
    };
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
    // New syntax which is easy to read
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    const removeTodo = async (id) => {
        const response = await axios.get(`${API}/${id}/delete`);
        setTodos(response.data);
    };
    const deleteTodo = async (todo) => {
        try {
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };
    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };
    const updateTodo = async () => {
        try {
            const response = await axios.put(`${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
            setTodo({});
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    useEffect(() => {
        // fetchTodosPromise();
        fetchTodos();
    }, []);
    
    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>Todos from server</h4>
            {/* <button className="btn btn-primary" onClick={() => updateTitle(todo.id, todo.title)}>
                Update Todo Title
            </button> */}
            
            {/* <button className="btn btn-primary" onClick={postTodo}>
                Post Todo
            </button> */}
            <input value={todo.title} 
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })}
                className="form-control mb-2"/>
            <textarea
                onChange={(e) => setTodo({...todo, description: e.target.value})}
                value={todo.description} type="text" 
                className="form-control mb-2"/>
            <input
                onChange={(e) => setTodo({...todo, due: e.target.value})}
                value={todo.due} type="date" 
                className="form-control mb-2"/>
            <label>
                <input
                    onChange={(e) => setTodo({...todo, completed: e.target.checked})}
                    value={todo.completed} type="checkbox"
                    className="me-2"/>
                Completed
            </label>
            
            <input value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: e.target.value
                })}
                className="form-control mb-2"/>
            <button className="btn btn-warning mb-2" onClick={postTodo}>
                Post Todo
            </button>
            <button className="btn btn-success mb-2" onClick={updateTodo}>
                Update Todo
            </button>
            <button className="btn btn-primary mb-2" onClick={createTodo}>
                Create Todo
            </button>
            <button className="btn btn-success mb-2 ms-auto" onClick={updateTitle}>
                Update Title
            </button>
            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item w-100" key={todo.id}>
                        <button className="btn btn-warning me-2 float-end"
                            onClick={() => fetchTodoById(todo.id)}>
                            Edit
                        </button>
                        <button className="btn btn-danger me-2 float-end"
                            onClick={() => removeTodo(todo.id)}>
                            Remove
                        </button>
                        <button className="btn btn-danger me-2 float-end"
                            onClick={() => deleteTodo(todo)}>
                            Delete
                        </button>
                        {todo.title}
                        <hr/>
                        <p>{todo.description}</p>
                        <p>{todo.due}</p>
                        {todo.id}
                    </li>
                ))}
            </ul>

            <h4>Retrieving Arrays</h4>
            <a href={API} className="btn btn-primary me-2">
                Get Todos
            </a>
            <h4>Retrieving an Item from an Array by ID</h4>
            <input 
                className="form-control"
                value={todo.id}
                onChange={(e) => setTodo({...todo, id: e.target.value})}/>
            <a href={`${API}/${todo.id}`}
               className="btn btn-primary me-2">
                Get Todo by ID
            </a>
            <h3>Filtering Array Items</h3>
            <a href={`${API}?completed=true`}
                className="btn btn-primary me-2">
                Get Completed Todos
            </a>

            <h4>Creating new Items in an Array</h4>
            <a href={`${API}/create`}
                className="btn btn-primary me-2">
                Create Todo
            </a>
            <h3>Deleting from an Array</h3>
            <input
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: e.target.value})}
                className="form-control mb-2"
                type="number"
            />
            <a href={`${API}/${todo.id}/delete`}
                className={"btn btn-primary me-2"}>
                Delete Todo with ID = {todo.id}
            </a>
            <h3>Updating an Item in an Array</h3>
            <input value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value})}
                className="form-control mb-2"
                type="text"
            />
            <a href={`${API}/${todo.id}/title/${todo.title}`}
                className="btn btn-primary me-2">
                Update Title to {todo.title}
            </a>
            <input value={todo.description}
                onChange={(e) => setTodo({
                    ...todo, description: e.target.value})}
                className="form-control mb-2"
                type="text"
            />
            <a href={`${API}/${todo.id}/description/${todo.description}`}
                className="btn btn-primary me-2">
                Update Description to {todo.description}
            </a>

            <input onChange={(e) => setTodo({...todo, completed: e.target.checked})}
                type="checkbox"
            />
            <a href={`${API}/${todo.id}/completed/${todo.completed}`}
                className="btn btn-primary me-2">
                Update Completed
            </a>
        </div>
    );
}

export default WorkingWithArrays;