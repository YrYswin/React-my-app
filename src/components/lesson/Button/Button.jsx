import React from 'react'
import classes from './Button.module.css'

function Button({ children, onClick, isActive }) {
   // let classes = 'button'
   // if (isActive) classes += 'active'
   console.log(classes)

   return (
      <button className={isActive ? `${classes.active} ${classes.button}` : classes.button} onClick={onClick} >
         {children}
      </button >
   )
}

export default Button