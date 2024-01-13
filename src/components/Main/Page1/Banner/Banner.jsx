import React from 'react'
import './Banner.css'
import BackgroundImage from '../../../../assets/image/Photo.png'
import Arrow from '../../../../assets/svg/arrow.svg'
import one from '../../../../assets/svg/vegetables/one.svg'
import two from '../../../../assets/svg/vegetables/two.svg'
import three from '../../../../assets/svg/vegetables/three.svg'
import four from '../../../../assets/svg/vegetables/four.svg'
import five from '../../../../assets/svg/vegetables/five.svg'

function Banner() {
    return (
        <div className='banner'>
            <div className="image">
                <div className="backgroundImg">
                    <img className='one' src={one} alt="" />
                    <img className='two' src={two} alt="" />
                    <img className='three' src={three} alt="" />
                    <img className='four' src={four} alt="" />
                    <img className='five' src={five} alt="" />
                    <img src={BackgroundImage} alt="" />
                </div>
            </div>
            <div className="background">

            </div>
            <div className="content">
                <div className="title">
                    <h1>100% Natural Food</h1>
                    <h3>Choose the best healtheir way of life</h3>
                </div>
                <div className="button">
                    <button>
                        <p>Explore Now</p>
                        <img src={Arrow} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner