import React from 'react'
import logo from '../../pictures/Logo.png'
import h from './Header.module.css'

const Header = () => {
    return (
        <header className={h.header}>
            <img src={logo} alt={logo}/>
            </header>
    )
}

export default Header