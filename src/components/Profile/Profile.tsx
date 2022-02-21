import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsDataType, ProfilePageType, RootStateType} from "../../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    postsData: Array<PostsDataType>
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                postsData={props.postsData}
                dispatch={props.dispatch}
            />
        </div>)
}

export default Profile