import React, { useState } from 'react'
import axios from 'axios'

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/users"

function CreatePerson({ closeCreatePopup, getUser, setService }) {
   const [newUser, setNewUser] = useState({
      name: '',
      lastName: '',
      avatar: '',
   })

   const handleChange = (event) => {
      const { name, value } = event.target;
      setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
   };

   async function createPerson() {
      try {
         const res = await axios.post(API, newUser)
         if (res.status === 200) {
            setService(true)
            closeCreatePopup()
         }
      } catch (error) {
         console.log('Error in createPerson', error)
      }
   }

   return (
      <div className='modal'>
         <div className="popup">
            <h1 style={{ textAlign: 'center' }}>Create Person</h1>
            <input
               type="text" name='name'
               placeholder='name'
               onChange={handleChange}
               value={newUser.name}
            />
            <input
               onChange={handleChange}
               type="text" name='lastName'
               placeholder='lastName'
               value={newUser.lastName}
            />
            <input
               onChange={handleChange}
               type='url' name='avatar'
               placeholder='avatar (url)'
               value={newUser.avatar}
            />

            <div className='group'>
               <button className='save' onClick={createPerson}>Create</button>
               <button className='cancel' onClick={closeCreatePopup}>Cancel</button>
            </div>
         </div>
      </div>
   )
}

export default CreatePerson