import React from 'react'
import './About.css'
import Fruits from '../../../../assets/image/FruitsFromOtherBanner.png'
import OneImage from '../../../../assets/image/Vegan Food.png'
import TwoImage from '../../../../assets/image/Mailbox Quality.png'
import Arrow from '../../../../assets/svg/arrow.svg'

function About() {
    return (
        <div className='container'>

            <div className="image">
                <img src={Fruits} alt="" />
            </div>

            <div className="text">

                <div className="title">
                    <h1>About Us</h1>
                    <h3>
                        We Believe in Working
                        Accredited Farmers
                    </h3>
                    <p>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                </div>

                <div className="list">

                    <div>
                        <div className="icon">
                            <img src={OneImage} alt="" />
                        </div>

                        <div className="description">
                            <h2>Organic Foods Only</h2>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                    </div>

                    <div>
                        <div className="icon">
                            <img src={TwoImage} alt="" />
                        </div>

                        <div className="description">
                            <h2>Quality Standards</h2>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                    </div>

                </div>

                <div className="button">
                    <button>
                        <p>Shop Now </p>
                        <img src={Arrow} alt="" />
                    </button>
                </div>

            </div>

        </div>
    )
}

export default About