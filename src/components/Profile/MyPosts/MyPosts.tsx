import m from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, PostsDataType} from "../../../Redux/store";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";




type MyPostsPropsType = {
    postsData: Array<PostsDataType>
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostsPropsType) => {


    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostActionCreator())
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            const newText = newPostElement.current.value
            props.dispatch(updateNewPostTextActionCreator(newText))
    }}


    return (
        <div className={m.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea className={m.textarea}
                              ref={newPostElement}
                              onChange={onPostChange}
                    />
                </div>
                <div className={m.buttons}>
                    <button className={m.addButton} onClick={addPost}>Add post</button>
                    <button className={m.removeButton}>Remove</button>
                </div>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts