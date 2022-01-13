import React from "react";
import n from './Navbar.module.css'
import {NavLink,} from 'react-router-dom'

type isActiveType = {
    isActive: boolean
}

const setActive = ({isActive}: isActiveType) => isActive ? n.active : ''

const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to='/profile' className={setActive}>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/dialogs' className={setActive}>Messages</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/news' className={setActive}>News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/music' className={setActive}>Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/settings' className={setActive}>Settings</NavLink>
            </div>


        </nav>
    )
}

export default Navbar