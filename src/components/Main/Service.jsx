import React from 'react'
import "./Service.css"

function Service({ data }) {
    return (
        <div className={`item-service ${data.student ? 'bg2' : 'bg1'}`}>
            <img src={data.image} alt={data.name} />
            <h1>{data.name}</h1>
            <h1>{data.lastname}</h1>
            <h1>{data.city}</h1>
            <h1>{data.student}</h1>
        </div>
    )
}

export default Service