import React from 'react'
import logo from '../../pictures/ricardo-gomez-angel-GsZLXA4JPcM-unsplash.jpg'
import h from './Header.module.css'

const Header = () => {
    return (
        <header className={h.header}>
            <img src={logo} alt={logo}/>
            </header>
    )
}

export default Header