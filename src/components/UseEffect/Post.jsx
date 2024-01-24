import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import User from './User'
import Modal from './Modal'
import CreatePerson from './CreatePerson'

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/users"

export default function Post() {
   const [user, setUser] = useState([''])
   const [active, setActive] = useState(false)
   const [updateUser, setUpdateUser] = useState([''])
   const [activeCreate, setActiveCreate] = useState(false)
   const [activeCreateSuccess, setActiveCreateSuccess] = useState(false)
   const [service, setService] = useState(false)
   const [message, setMessage] = useState('')

   async function getUser() {
      try {
         const res = await axios.get(API)

         setUser(res.data)
      } catch (error) {
         console.log('Error', error)
      }
   }

   const handleChange = (event) => {
      const { name, value } = event.target
      // setUpdateUser({ ...updateUser, [name]: value })
      setUpdateUser((prevUpdateUser) => ({ ...prevUpdateUser, [name]: value }));
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
            successAchieved('Update')
         }
      } catch (error) {
         console.log('Error in saveChange', error)
      }
   }

   async function deleteUser(id) {
      try {
         await axios.delete(`${API}/${id}`)
         setService(!service)
         successAchieved('Delete')
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
   function successAchieved(messageInSuccess) {
      setActiveCreateSuccess(true)
      setMessage(messageInSuccess)
   }

   const handleKeyPress = (event) => {
      setActiveCreateSuccess(false);
   };

   const handleOutsideClick = (event) => {
      if (event.target.closest('.createSuccesfull')) {
         setActiveCreateSuccess(false);
      }
   };

   useEffect(() => {
      document.addEventListener('keydown', handleKeyPress);
      document.addEventListener('click', handleOutsideClick);

      return () => {
         document.removeEventListener('keydown', handleKeyPress);
         document.removeEventListener('click', handleOutsideClick);
      };
   }, [])

   return (
      <div>
         <div className="create">
            <button
               className='btn'
               onClick={openCreatePopup}
            >
               Create a new Person
            </button>

            {
               activeCreateSuccess &&
               <div className='createSuccesfull'>
                  <div>
                     <h2>{message} person succesfull</h2>
                     <h5>Click to continue</h5>
                  </div>
               </div>
            }

            {
               activeCreate &&
               <CreatePerson
                  closeCreatePopup={closeCreatePopup}
                  getUser={getUser}
                  successAchieved={successAchieved}
               />
            }
         </div>

         <div className="user">
            {
               user.map((data) => (
                  <User key={data.id} item={data} openPopup={openPopup} deleteUser={deleteUser} />
               ))
            }
         </div>

         {
            active &&
            <Modal
               updateUser={updateUser}
               handleChange={handleChange}
               closePopup={closePopup}
               saveChange={saveChange}
            />
         }

      </div>
   )
}