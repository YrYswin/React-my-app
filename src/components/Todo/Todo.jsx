import React, { useState } from 'react'
import './Todo.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo() {
    const now = new Date()

    const [todos, setTodos] = useState([
        { title: "Go to workshop", completed: false, id: 1, },
        { title: "Read book 'Harry Potter' ", completed: false, id: 2, },
        { title: "Write in list work", completed: false, id: 3, },
        { title: "Go shopping at the supermarket", completed: false, id: 4, },
        { title: "Go bowling with friends", completed: false, id: 5, },
        { title: "Do you homework", completed: false, id: 6, },
    ])

    console.log(todos)

    const addTodoHandler = (text) => {
        if (text.trim() !== '') {
            const newTodo = {
                title: text,
                completed: false,
                id: todos.length + 1,
            }
            setTodos([...todos, newTodo])
        }
    }
    const DeleteTodoHandler = (id) => {
        setTodos(todos.filter((x) => x.id !== id))
    }

    const CheckInputHandler = (id) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    const DeleteCompletedHandle = () => {
        setTodos((todos) => todos.filter((todo) => !todo.completed))
    }

    return (
        <div>
            <div className="header">
                <h1>Todo app</h1>
                <button className='btn' onClick={DeleteCompletedHandle}>Clear</button>
                <span>The time is now: {now.toLocaleTimeString()}</span>
            </div>


            <TodoForm addTodo={addTodoHandler} />
            <TodoList todos={todos} deleteTodo={DeleteTodoHandler} checkTodo={CheckInputHandler} />
        </div>
    )
}

export default Todo