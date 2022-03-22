import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../pictures/kisspng-royalty-free-logo-graphic-design-5b1ed0ea40c1c4.1858851715287462182653.png'
import { DataType, InitialStateType } from '../../Redux/auth-reducer'
import h from './Header.module.css'


type HeaderPropsType = {
    data: InitialStateType
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={h.header}>
            <img src={logo} alt={logo} />

            <div className={h.loginBlock}>
                {props.data.isAuth
                    ? props.data.login
                    : <NavLink to='/login'>Login</NavLink>
                }

            </div>
        </header>
    )
}

export default Header