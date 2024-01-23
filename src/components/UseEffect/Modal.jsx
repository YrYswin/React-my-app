import React from 'react'

function Modal({ updateUser, handleChange, closePopup, saveChange }) {
   return (
      <div className='modal'>
         <div className="popup">
            <input
               onChange={handleChange}
               type="text" name='name'
               placeholder='name'
               value={updateUser.name}
            />
            <input
               onChange={handleChange}
               type="text" name='lastName'
               placeholder='lastName'
               value={updateUser.lastName}
            />
            <input
               onChange={handleChange}
               type='url' name='avatar'
               placeholder='avatar (url)'
               value={updateUser.avatar}
            />

            <div className='group'>
               <button className='save' onClick={() => saveChange(updateUser.id)}>Save</button>
               <button className='cancel' onClick={closePopup}>Cancel</button>
            </div>
         </div>
      </div>
   )
}

export default Modal