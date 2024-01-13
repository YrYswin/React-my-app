import React from 'react'

function Person({ data }) {
    return (
        <div className='card'>
            <img src={data.img} alt='text' />
            <h4>Yryskeldi Beknazarov</h4>
            <h5>yryskeldi445@gamil.com</h5>
        </div>
    )
}

export default Person