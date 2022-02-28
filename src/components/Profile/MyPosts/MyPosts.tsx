import m from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsDataType} from "../../../Redux/store";
import React from "react";





type MyPostsPropsType = {
    postsData: Array<PostsDataType>
    updateNewPostText: (newText: string) => void
    addPost: () => void
}

const MyPosts = (props: MyPostsPropsType) => {


    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = () => {
        if (newPostElement.current) {
            props.addPost()
            newPostElement.current.value = ''
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            const newText = newPostElement.current.value
            props.updateNewPostText(newText)

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
                    <button className={m.addButton} onClick={onAddPost}>Add post</button>
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