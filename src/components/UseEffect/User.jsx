import React, { useState } from 'react'

function User({ item, openPopup, deleteUser }) {
   const [active, setActive] = useState(false)

   function openDeleteWindow() {
      setActive(true)
   }
   function closeDeleteWindow() {
      setActive(false)
   }

   return (
      <div key={item.id} >
         <div className="while">
            <img src={item.avatar} alt={item.avatar} />
         </div>
         {
            !active &&
            <div className="btns">
               <h5>{item.name} {item.lastName}</h5>
               <p>{item.createdAt}</p>
               <button className='update' onClick={() => openPopup(item.id)}>Update</button>
               <button className='delete' onClick={openDeleteWindow}>Delete</button>
               {/* <button className='delete' onClick={() => deleteUser(item.id)}>Delete</button> */}
            </div>
         }

         {
            active && <div className='deleteMenu'>
               <h1 className='deleteHeader'>Do you want to delete this</h1>
               <button className='update' onClick={() => deleteUser(item.id)}>Yes</button>
               <button className='delete' onClick={closeDeleteWindow}>No</button>
            </div>
         }
      </div>
   )
}

export default User