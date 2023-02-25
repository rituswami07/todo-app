import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
    const [title, setTitle] = useState('');
    return (
        <>
          <input className="h1" placeholder="Add todo" value={title} onChange={e => setTitle(e.target.value)}
          />
          <button className="btn" onClick={() => {
              setTitle('');
              onAddTodo(title);
          }}>Add</button>
        </>
    )
}