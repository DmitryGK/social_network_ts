import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataType, ProfilePageType, RootStateType} from "../../Redux/State";

type ProfilePropsType = {
    postsData: Array<PostsDataType>
    addPost: (postText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData} addPost={props.addPost}/>
        </div>)
}

export default Profile