import p from "./ProfileInfo.module.css";
import pic from "../../../pictures/richard-horvath-RAZU_R66vUc-unsplash.jpg";
import React from "react";
import { ProfileType } from "../../../Redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";


type ProfileInfoPropsType = {
    profile: ProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
if(!props.profile){
    return <Preloader/>
} else

    return (
        <div>
            <div><img className={p.image} src={pic} alt={pic} /></div>
            <div className={p.profileInfo}>
                <img src={props.profile.photos.large}/>
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo