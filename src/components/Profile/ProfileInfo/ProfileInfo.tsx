import p from "./ProfileInfo.module.css";
import pic from "../../../pictures/richard-horvath-RAZU_R66vUc-unsplash.jpg";
import React from "react";

const ProfileInfo = () => {
    return (
        <div>
            <div><img className={p.image} src={pic} alt={pic}/></div>
            <div className={p.profileInfo}>
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo