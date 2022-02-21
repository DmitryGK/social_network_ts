import {ActionsTypes, PostsDataType, RootStateType, StoreType} from "../../../Redux/store";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


type MyPostsPropsType = {}

const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().profilePage

                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    const onPostChange = (newText: string) => {
                        store.dispatch(updateNewPostTextActionCreator(newText))
                    }
                    return <MyPosts updateNewPostText={onPostChange}
                             addPost={addPost}
                             postsData={state.postsData}
                    />

                }
            }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer