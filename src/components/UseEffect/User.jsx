import React from 'react'

function User({ item, openPopup, deleteUser }) {
   return (
      <div key={item.id} >
         <div className="while">
            <img src={item.avatar} alt={item.avatar} />
         </div>
         <div className="btns">
            <h5>{item.name} {item.lastName}</h5>
            <p>{item.createdAt}</p>
            <button className='update' onClick={() => openPopup(item.id)}>Update</button>
            <button className='delete' onClick={() => deleteUser(item.id)}>Delete</button>
         </div>
      </div>
   )
}

export default User