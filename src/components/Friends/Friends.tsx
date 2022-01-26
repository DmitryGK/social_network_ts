import React from 'react'
import ava1 from './../../pictures/avatars/ava1.jpg'
import ava2 from './../../pictures/avatars/ava2.jpg'
import ava3 from './../../pictures/avatars/ava3.jpg'
import avatar from './Friends.module.css'

const Friends = () => {
    return (
        <div className={avatar.style}>
            <div>
                Friends
            </div>

            <span >
                <img src={ava1} alt={ava1}/>
            </span>
            <span>
                <img src={ava2} alt={ava2}/>
            </span>
            <span>
                <img src={ava3} alt={ava3}/>
            </span>
        </div>
    )
}

export default Friends