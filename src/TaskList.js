import { useState } from 'react';
import Task from './Task';
export default function TaskList({
    todos,
    onChangeTodo,
    onDeleteTodo
}) {
    return (
        <ul>
            {todos && todos.length ? todos.map((todo) => (
                <div key={todo.id}>
                    <Task
                    todo={todo}
                    onChange={onChangeTodo}
                    onDelete={onDeleteTodo}
                   />
                </div>
            )) : null}
        </ul>
    );
}