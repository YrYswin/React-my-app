import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, deleteTodo, checkTodo, editTodo }) {
    return (
        <div>
            {!todos.length && <h2 className='empty'>Todo list is empty</h2>}

            {
                todos.map((data) => (
                    <TodoItem key={data.id} item={data} checkTodo={checkTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
                ))
            }
        </div>
    )
}

export default TodoList