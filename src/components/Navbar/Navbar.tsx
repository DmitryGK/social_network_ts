import React from "react";
import n from './Navbar.module.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <Link to='/profile'>Profile</Link>
            </div>
            <div className={n.item}>
                <Link to='/dialogs'>Messages</Link>
            </div>
            <div className={n.item}>
                <Link to='/news'>News</Link>
            </div>
            <div className={n.item}>
                <Link to='/music'>Music</Link>
            </div>
            <div className={n.item}>
                <Link to='/settings'>Settings</Link>
            </div>


        </nav>
    )
}

export default Navbar