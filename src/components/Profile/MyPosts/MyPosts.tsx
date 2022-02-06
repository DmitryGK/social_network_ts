import m from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsDataType} from "../../../Redux/State";
import React from "react";


type MyPostsPropsType = {
    postsData: Array<PostsDataType>
    addPost: (postText: string) => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {


    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)

        }
    }

    let onPostChange = () => {
        if (newPostElement.current)
            props.updateNewPostText(newPostElement.current.value)
    }


    return (
        <div className={m.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea className={m.textarea}
                              ref={newPostElement}
                              value={props.newPostText}
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