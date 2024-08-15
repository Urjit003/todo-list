import React,{useState} from "react"
import './todo.css'
const todo = () => {
    const [todo, setTodo] = useState([]);
    const [val,setVal] = useState('');

    const addTodo = (e)=> {
        if(val.trim()) {
            setTodo(t=>[...t],e.target.value);
            setVal("");
        }
    };
    const deleteTodo = (index) => {
        const newTodos = todo.filter((_, i) => i !== index);
        setTodo(newTodos);
      };
    return(
       <div className="App">
        <h1>A simple to-do list</h1>
        <input type="text" name="" id="" placeholder="enter a new Task" onChange={(e)=>setVal(e.target.value) } />
        <button onClick={addTodo}></button>
       </div>
    )
}
export default todo;