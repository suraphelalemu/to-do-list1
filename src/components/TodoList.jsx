import React,{useState} from 'react'
import { BiCheckDouble, BiEdit , BiTrash, BiCheckCircle,BiReset,BiRefresh } from "react-icons/bi";
import './Todolist.css';

function TodoList() {
const [todos, setTodos] =useState([])
const [inputvalue, setInputValue] =useState('')
const [editIndex, setEditIndex] =useState(-1)
const [indexF, setIndexF] =useState(-1)


const addTodo = () =>{
    if(inputvalue.trim() !==''){
        if(editIndex!==-1){
            const updateTodos =[...todos]
            updateTodos[editIndex] = {task: inputvalue, completed:updateTodos[editIndex]}

            setTodos(updateTodos)
            setInputValue('')
            setEditIndex(-1)
            setIndexF(indexF +1)
        }else{
            setTodos([...todos, {task: inputvalue ,completed:false}])
            setInputValue('')

        }
    }
}

const startEdit = (index) => {
    
    console.log(
        indexF
    );
   setInputValue(todos[0].task)
   setEditIndex(index)
}

const cancelEdit = () => {
    setInputValue('')
    setEditIndex(-1)
}
const removeTodo = (index) => {
 const updateTodos = todos.filter((_, i)=> i !== index)
    setTodos(updateTodos)
}
const tooglecompleted = (index)=> {
    const updateTodos = [...todos]
    updateTodos[index].completed = !updateTodos[index].completed
}


    return(
 <div className="todo-container">
            <h1>To-Do List</h1>
<div className="input-section">
   <input type="text" value={inputvalue} onChange={(e)=> setInputValue(e.target.value)} 
   placeholder='Enter a new Task'
   className="input-fields" />

   {editIndex !== -1 ? (

        <>
           <button onClick={addTodo} className="update-btn"> <BiCheckDouble/> </button>
            <button onClick={cancelEdit} className="cancel-btn"> <BiRefresh/> </button>
            
       </>
   ) : (
        <button onClick={addTodo}  className="add-btn"> Add </button>
   )}
    </div>
<ul className="todo-list">
    {todos.map((todo, index) =>(
        <li key={index} className={todo.completed? 'completed':'{todo.task'}>

            <div className="btn-group">
             <button onClick={startEdit} className="btn-edit"><BiEdit /> </button>
             <button onCanPlay ={removeTodo} className="btn-remove"><BiTrash /> </button>
             <button className="btn-done" onClick={() => tooglecompleted(index)}>
                {todo.completed ? <BiReset /> :<BiCheckCircle />}

                </button>
            </div>
        
        </li>
    )
    )}
</ul>

</div>
    )
    
}
export default TodoList
