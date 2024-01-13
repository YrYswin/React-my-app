import React from 'react'
import './Products.css'
import Celebrese from '../../../../assets/image/Calabrese.png'
import Bean from '../../../../assets/image/Bean.png'
import Bread from '../../../../assets/image/Bread.png'
import Banana from '../../../../assets/image/Banana.png'
import Egg from '../../../../assets/image/Egg.png'
import Nuts from '../../../../assets/image/Nuts.png'
import Tomato from '../../../../assets/image/Tomato.png'
import NutsBrown from '../../../../assets/image/NutsBrown.png'
import Arrow from '../../../../assets/svg/arrow.svg'


function Products() {
    return (
        <div className='container'>
            <div className="box">
                <div className="titles">
                    <div>
                        <h1>Categories</h1>
                        <h2>Our Products</h2>
                    </div>
                </div>


                <div className="productList">
                    <div className="product">
                        <div className="image">
                            <img src={Celebrese} />
                            <h1>Vegetable</h1>
                        </div>
                        <div className="text">
                            <div className="overview">
                                <p>Calabrese</p>
                            </div>
                            <div className="price">
                                <span className='inactive'>$20.00</span>
                                <span>$13.00</span>
                                <div className="raiting">
                                    *****
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="image">
                            <img src={Banana} />
                            <h1>Vegetable</h1>
                        </div>
                        <div className="text">
                            <div className="overview">
                                <p>Banana</p>
                            </div>
                            <div className="price">
                                <span className='inactive'>$20.00</span>
                                <span>$13.00</span>
                                <div className="raiting">
                                    *****
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="image">
                            <img src={Nuts} />
                            <h1>Vegetable</h1>
                        </div>
                        <div className="text">
                            <div className="overview">
                                <p>White Nuts</p>
                            </div>
                            <div className="price">
                                <span className='inactive'>$20.00</span>
                                <span>$13.00</span>
                                <div className="raiting">
                                    *****
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="image">
                            <img src={Tomato} />
                            <h1>Vegetable</h1>
                        </div>
                        <div className="text">
                            <div className="overview">
                                <p>Tomato</p>
                            </div>
                            <div className="price">
                                <span className='inactive'>$20.00</span>
                                <span>$13.00</span>
                                <div className="raiting">
                                    *****
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="image">
                            <img src={Bean} />
                            <h1>Vegetable</h1>
                        </div>
                        <div className="text">
                            <div className="overview">
                                <p>MR BEAN</p>
                            </div>
                            <div className="price">
                                <span className='inactive'>$20.00</span>
                                <span>$13.00</span>
                                <div className="raiting">
                                    *****
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="image">
                            <img src={NutsBrown} />
                            <h1>Vegetable</h1>
                        </div>
                        <div className="text">
                            <div className="overview">
                                <p>Nuts Brown</p>
                            </div>
                            <div className="price">
                                <span className='inactive'>$20.00</span>
                                <span>$13.00</span>
                                <div className="raiting">
                                    *****
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="image">
                            <img src={Egg} />
                            <h1>Vegetable</h1>
                        </div>
                        <div className="text">
                            <div className="overview">
                                <p>Penguin Egg</p>
                            </div>
                            <div className="price">
                                <span className='inactive'>$20.00</span>
                                <span>$13.00</span>
                                <div className="raiting">
                                    *****
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="image">
                            <img src={Bread} />
                            <h1>Vegetable</h1>
                        </div>
                        <div className="text">
                            <div className="overview">
                                <p>Calabrese</p>
                            </div>
                            <div className="price">
                                <span className='inactive'>$20.00</span>
                                <span>$13.00</span>
                                <div className="raiting">
                                    *****
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="button">
                    <button>
                        <p>Lead More</p>
                        <img src={Arrow} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products