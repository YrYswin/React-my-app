import React from 'react'
import './Testimonial.css'
import left from '../../../../assets/image/LEFT_PHOTO.png'
import right from '../../../../assets/image/RIGHT_PHOTO.png'

function Testimonial() {
    return (
        <div className='box'>
            <div className="container3">
                <div className="leftImg">
                    <img src={left} alt="" />
                </div>

                <div className="center">
                    <div className="main">

                        <div className="title">
                            <h1>Testimonial</h1>
                            <h2>What Our Customer Saying?</h2>
                        </div>
                        <div className="bodyTitle">

                            <div className="avatar">
                                <img src="" alt="" />
                            </div>

                            <div className="textTitle">
                                <div className="starTitle">
                                    <img src="" alt="" />
                                </div>
                                <div className="text">
                                    <p>
                                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                                    </p>
                                </div>
                            </div>

                            <div className="endTitle">
                                <div className="textEnd">
                                    <h1>Sara Taylor</h1>
                                    <h2>Consumer</h2>
                                </div>
                                <div className="navigate">
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="other">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                        <div className="four"></div>
                    </div>
                </div>

                <div className="rightImg">
                    <img src={right} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonial