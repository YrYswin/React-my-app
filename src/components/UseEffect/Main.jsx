import React, { useState, useEffect } from 'react'
import './Main.css'
import User from './User'

const API = "https://reqres.in/api/users?page=2"

export default function Main() {
    const [user, setUser] = useState([])
    const [userAbout, setUserAbout] = useState({})

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((x) => setUser(x.data))
    }, [])

    function getUser(id) {
        fetch(`https://reqres.in/api/users/${id}`)
            .then((res) => res.json())
            .then((data) => setUserAbout(data.data))
    }

    function deletePerson() {
        setUserAbout({})
    }

    return (
        <div>
            <div className="user">
                {
                    user.map((item) => (
                        <User key={item.id} data={item} getUser={getUser} />
                    ))
                }
            </div>
            <div className="about" onClick={deletePerson}>
                <img src={userAbout.avatar} alt={userAbout.first_name} />
                <h2>{userAbout.first_name} {userAbout.last_name}</h2>
                <p>{userAbout.email}</p>
            </div>
        </div>
    )
}

