import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../pictures/Group 2.png'
import { DataType } from '../../Redux/auth-reducer'
import h from './Header.module.css'


type HeaderPropsType = {
    data: DataType
    isAuth: boolean
    email: string
    login: string
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={h.header}>
            <img src={logo} alt={logo} />
            <div className={h.loginBlock}>
                {(props.isAuth)
                    ? props.login
                    : <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header