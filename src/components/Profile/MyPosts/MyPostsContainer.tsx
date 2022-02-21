import {ActionsTypes, PostsDataType} from "../../../Redux/store";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


type MyPostsPropsType = {
    postsData: Array<PostsDataType>
    dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = (props: MyPostsPropsType) => {


    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = (newText: string) => {
        props.dispatch(updateNewPostTextActionCreator(newText))
    }


    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 postsData={props.postsData}
        />
    )
}

export default MyPostsContainer