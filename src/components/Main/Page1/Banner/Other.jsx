import React from 'react'
import './Other.css'
import left from '../../../../assets/image/left.png'
import right from '../../../../assets/image/right.png'

function Other() {
    return (
        <div className='other'>
            <div>
                <img src={left} alt="" />
                <div className="left">
                    <h1>Natural!</h1>
                    <p>Get Garden Fresh Fruits</p>
                </div>
            </div>
            <div>
                <img src={right} alt="" />
                <div className="right">
                    <h1>Offer!</h1>
                    <p>Get 10% off on Vegetables</p>
                </div>
            </div>
        </div>
    )
}

export default Other