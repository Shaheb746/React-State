import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample-task", isDone: false, id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let AddNewTask = () => {
        setTodos((prevTodos)=>{
            return [...prevTodos, {task: newTodo, isDone: false, id: uuidv4()}]
        })
        setNewTodo("")
    }
    let UpdateTodoValue = (event)=>{
        setNewTodo(event.target.value)
    }
    let DeleteTodo = (id)=>{
        setTodos((prevTodos)=> todos.filter((prevTodos)=> prevTodos.id != id))
    }
    let MarkAsDone = (id)=>{
        let newArray = todos.map((todos)=>{
            return id === todos.id ? {...todos, isDone : true} :todos  
        })
        setTodos(newArray)
    }
    let MarkAsAllDone = async () => {
        let newArray = todos.map((todos) =>{
            return {
                ...todos, 
                isDone: true
            }
        });
        setTodos(newArray)
    }
    
    return(
        <div>
            <input type="text" name="todo" value={newTodo} onChange={UpdateTodoValue} placeholder="Enter your TODO.." />
            <button onClick={AddNewTask}>ADD</button>
            <hr />
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none'}}>{todo.task}</span>
                        <button onClick={() => DeleteTodo(todo.id)}>delete</button>
                        <button onClick={() => MarkAsDone(todo.id)}>Mark as Done</button>
                    </li>
                ))}
            </ul>
            <button onClick={MarkAsAllDone}>Mark as All Done</button>
        </div>
    )
}