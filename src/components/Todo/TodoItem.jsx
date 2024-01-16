import React from 'react'
import './Todo.css'

function TodoItem({ item, deleteTodo, checkTodo }) {
    return (
        <div className='todo-item'>
            <label class="checkbox-btn">
                <label for="checkbox"></label>
                <input id='checkbox' className='checks' type="checkbox" checked={item.completed} onChange={() => checkTodo(item.id)} />

                <span class="checkmark"></span>
            </label>
            <p >{item.title}</p>
            <button onClick={() => deleteTodo(item.id)} className='btn'> Delete Todo </button>
        </div>
    )
}

export default TodoItem