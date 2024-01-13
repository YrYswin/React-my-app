import React from 'react'
import './header.css'
import Logo from '../../assets/svg/logo.svg'
import SearchSvg from '../../assets/svg/search.svg'
import CartSvg from '../../assets/svg/cartIcon.svg'

function header() {
    return (
        <header className='header'>
            <div className='head'>

                <div className='nav'>
                    <div className="logoIcon">
                        <img src={Logo} alt="Logo" />
                        <h3>Organic</h3>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Page</li>
                        <li>
                            <select name="pages" id="pages">
                                <option>Pages 1</option>
                                <option>Pages 2</option>
                                <option>Pages 3</option>
                                <option>Pages 4</option>
                            </select>
                        </li>
                        <li>Shop</li>
                        <li>Project</li>
                        <li>News</li>
                    </ul>
                </div>

                <div className="search">
                    <div className="input">
                        <input id='search' type="text" placeholder='search' />
                        <img src={SearchSvg} alt="iconSearch" />
                    </div>
                    <div className="cart">
                        <img src={CartSvg} alt="CartIcon" />
                        <p>Cart <span>0</span></p>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default header