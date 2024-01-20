import React, { useState } from 'react'
import './Todo.css'

function TodoItem({ item, deleteTodo, checkTodo, editTodo }) {

    const [isEdit, setIsEdit] = useState(false)

    const [editText, setEditText] = useState(item.title)

    const openEdit = () => {
        setIsEdit(true)
    }

    const handleTextChange = (event) => {
        setEditText(event.target.value)
    }

    const handleCancel = () => {
        setIsEdit(false)
        setEditText(item.text)
    }

    const handleSave = () => {
        setIsEdit(false)
        editTodo(item.id, editText)
    }

    return (
        <div className='todo-item'>
            <label class="checkbox-btn">
                <label for="checkbox"></label>
                <input
                    id='checkbox'
                    className='checks'
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => checkTodo(item.id)}
                />
                <span class="checkmark"></span>
            </label>

            {
                isEdit ? (
                    <>
                        <input type="text" value={editText} onChange={handleTextChange} />
                        <div className="btns">
                            <button onClick={handleSave} className='btn'>Save</button>
                            <button onClick={handleCancel} className='btn'>Cancel</button>
                        </div>
                    </>
                ) : (
                    <>
                        <p className={item.completed ? 'text' : ''} >{item.title}</p>
                        <div className="btns">
                            <button onClick={openEdit} className='btn'>Edit</button>
                            <button onClick={() => deleteTodo(item.id)} className='btn'> Delete Todo </button>
                        </div>
                    </>
                )
            }

            {/* <p className={item.completed ? 'text' : ''} >{item.title}</p>
            <div className="btns">
                <button onClick={() => editTodo(item.id, item.title)} className='btn'>Edit</button>
                <button onClick={() => deleteTodo(item.id)} className='btn'> Delete Todo </button>
            </div> */}
        </div>
    )
}

export default TodoItem