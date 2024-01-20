import React from 'react'
import './Button..css'

function Button({ children, onClick, isActive }) {
    // let classes = 'button'
    // if (isActive) classes += 'active'

    return (
        <button className={isActive ? 'button active' : 'button'} onClick={onClick} >
            {children}
        </button >
    )
}

export default Button