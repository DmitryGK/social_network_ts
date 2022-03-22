import p from "./ProfileInfo.module.css";
import pic from "../../../pictures/richard-horvath-RAZU_R66vUc-unsplash.jpg";
import React from "react";
import { ProfileType } from "../../../Redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import { profile } from "console";


type ProfileInfoPropsType = {
    profile: ProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader />
    } else

        return (
            <div>
                <div><img className={p.image} src={pic} alt={pic} /></div>
                <div className={p.profileInfo}>

                    <img src={props.profile.photos.large} />

                    <div className={p.name}>
                        {props.profile.fullName}
                    </div>
                    {props.profile.lookingForAJobDescription}

                </div>
            </div>
        )
}

export default ProfileInfo