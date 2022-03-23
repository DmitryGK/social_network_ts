import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../pictures/kisspng-royalty-free-logo-graphic-design-5b1ed0ea40c1c4.1858851715287462182653.png'
import { DataType } from '../../Redux/auth-reducer'
import h from './Header.module.css'


type HeaderPropsType = {
    data: DataType
    setUserData: (id: number, email: string, login: string) => void
    isAuth: boolean
    email: string
    login: string
}

const Header = (props: HeaderPropsType) => {
    
    return (
        <header className={h.header}>
            <img src={logo} alt={logo} />

            <div className={h.loginBlock}>
            
                { (props.isAuth)
                    ? props.login
                    : <NavLink to='/login'>Login</NavLink>
                }

            </div>
        </header>
    )
}

export default Header