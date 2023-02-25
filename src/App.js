
import './App.css';
import { useState } from "react";
import TaskList from './TaskList.js';
import AddTodo from './AddTodo.js';

let nextId = 1;

const initialTodos = [
  { id: 0, title:"Task 1", done: true },
  { id: 1, title:"Task 2", done:false },
  { id: 2, title:"Task 3", done: false },
  { id: 3, title:"Task 4", done: false},
]
 
function App()  {

   const [todos, setTodos] = useState([]);
   
   function handleAddTodo(title) {
     setTodos([
       ...todos,
       {
       id: nextId++,
       title: title,
       done:false
     }
    ]);
   }

   function handleChangeTodo(nextTodo) {
     setTodos(todos.map(t => {
     if (t.id === nextTodo.id) {
      return nextTodo;
   } else {
     return t;
   }
  }));
}

   function handleDeleteTodo(todoId) {
     setTodos(
       todos.filter(t =>
      t.id !== todoId)
      );
    
   }
  

  return (
    <>
      <div className="body">
       <div className="top-heading">
         <h1>To-Do Application</h1> 
      
        
         <h5>Add To-Do task here</h5>
          <AddTodo 
          onAddTodo={handleAddTodo}
          />

          <TaskList
            todos={todos}
            onChangeTodo={handleChangeTodo}
            onDeleteTodo={handleDeleteTodo}
            />
        
      
    
        </div>
        </div>
            
      </>
  )
     
};
export default App;
