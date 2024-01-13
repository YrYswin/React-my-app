import React from 'react'

function Product({ data }) {
    return (
        <div className='product-card'>
            <div className='title'>{data.name}</div>
            <img src={data.image} />
            <div className='overview'>
                <span>{data.price}</span>
                <span>{data.rating}</span>
            </div>
            <span>{data.numReviews}</span>
        </div>
    )
}

export default Product