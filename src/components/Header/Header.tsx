import React from 'react'
import logo from '../../pictures/kisspng-royalty-free-logo-graphic-design-5b1ed0ea40c1c4.1858851715287462182653.png'
import h from './Header.module.css'

const Header = () => {
    return (
        <header className={h.header}>
            <img src={logo} alt={logo} />
            </header>
    )
}

export default Header