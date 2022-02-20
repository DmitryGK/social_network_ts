import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsDataType, ProfilePageType, RootStateType} from "../../Redux/store";

type ProfilePropsType = {
    postsData: Array<PostsDataType>
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     dispatch={props.dispatch}
            />
        </div>)
}

export default Profile