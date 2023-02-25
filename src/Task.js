import { useState } from "react";
export default function Task({ todo, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;
    if (isEditing) {
        todoContent = (
            <>   
            <input type="text" className="h3" value={todo.title} onChange={(e) => {
                onChange({...todo,
                title: e.target.value
              });
            }} />
            <button className="btn-2 h2" onClick={() => setIsEditing(false)}>
                Save
            </button>
            </>
        );
    } else {
        todoContent = (
            <>
             <span className="h4">
              {todo.title || ""}
              </span>
              <button className="btn-1 h2 input" onClick={() => setIsEditing(true)}>Edit</button>
            
            </>
        );
    }

    return ( 
        <div>
            {/* <input className="h2" checked={todo.done} onChange={e => {
                onChange({...todo,
                done: e.target.checked
              });
            }}
         /> */}
         {todoContent}
         <button className="btn-2 h2 input" onClick={() => onDelete(todo.id)}>Delete</button>
         </div>
         
    );
}