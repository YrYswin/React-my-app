import React from 'react'
import './Product.css'
import Product from './Product'

import products from './Data'

function About() {
    return (
        <div className='wrapper-product'>

            {
                products.map((item) => (
                    <Product key={item.id} data={item} />
                ))
            }

        </div>
    )
}

export default About