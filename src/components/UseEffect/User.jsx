import React from 'react'

function User({ data, getUser }) {
    return (
        <div onClick={() => getUser(data.id)}>
            <img src={data.avatar} alt={data.first_name} />
            <h2>{data.first_name} {data.last_name}</h2>
            <p>{data.email}</p>
        </div>
    )
}

export default User