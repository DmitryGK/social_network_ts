import React from "react";
import p from './Profile.module.css'
import pic from '../../pictures/wp.jpg'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (<div className={p.content}>
        <div><img className={p.image} src={pic} alt={pic}/></div>
        <div>
            Ava + description
        </div>
        <MyPosts />
    </div>)
}

export default Profile