import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './User'
import Modal from './Modal'
import CreatePerson from './CreatePerson'

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/users"

export default function Post() {
   const [user, setUser] = useState([])
   const [active, setActive] = useState(false)
   const [updateUser, setUpdateUser] = useState([])
   const [activeCreate, setActiveCreate] = useState(false)
   const [service, setService] = useState(false)

   async function getUser() {
      try {
         const res = await axios.get(API)

         setUser(res.data)
      } catch (error) {
         console.log('Error', error)
      }
   }

   useEffect(() => {
      getUser()
   }, [service])

   async function openPopup(id) {
      setActive(true)
      try {
         const res = await axios.get(`${API}/${id}`)
         setUpdateUser(res.data)
      } catch (error) {
         console.log('Error in openPopup', error)
      }
   }
   function closePopup() {
      setActive(false)
   }

   async function saveChange(id) {
      try {
         const res = await axios.put(`${API}/${id}`, updateUser, {
            headers: {
               "Content-Type": "application/json"
            },
         })
         if (res.status === 200) {
            setActive(false)
            setService(!service)
         }
      } catch (error) {
         console.log('Error in saveChange', error)
      }
   }

   async function deleteUser(id) {
      try {
         const res = await axios.delete(`${API}/${id}`)
         setService(!service)
      } catch (error) {
         console.log('Error in deleteUser', error)
      }
   }

   function openCreatePopup() {
      setActiveCreate(true)
   }
   function closeCreatePopup() {
      setActiveCreate(false)
   }

   const handleChange = (event) => {
      const { name, value } = event.target
      // setUpdateUser({ ...updateUser, [name]: value })
      setUpdateUser((prevUpdateUser) => ({ ...prevUpdateUser, [name]: value }));
   }

   return (
      <div>
         <div className="create">
            <button
               className='btn'
               onClick={openCreatePopup}
            >
               Create a new Person
            </button>
         </div>
         {
            activeCreate && <CreatePerson closeCreatePopup={closeCreatePopup} getUser={getUser} setService={setService} />
         }

         <div className="user">
            {
               user.map((data) => (
                  <User key={data.id} item={data} openPopup={openPopup} deleteUser={deleteUser} />
               ))
            }
         </div>

         {
            active && <Modal updateUser={updateUser} handleChange={handleChange} closePopup={closePopup} saveChange={saveChange} />
         }

      </div>
   )
}