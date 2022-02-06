import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataType, ProfilePageType, RootStateType} from "../../Redux/State";

type ProfilePropsType = {
    postsData: Array<PostsDataType>
    addPost: (postText: string) => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>)
}

export default Profile