import m from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsDataType} from "../../../Redux/State";


type MyPostsPropsType = {
    postsData:Array<PostsDataType>
}

const MyPosts = (props: MyPostsPropsType) => {



    let postsElements = props.postsData.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={m.postsBlock}>
            <h3>My posts</h3>
            <div >
                <div>
                    <textarea className={m.textarea}/>
                </div>
                <div className={m.buttons}>
                    <button className={m.addButton}>Add post</button>
                    <button className={m.removeButton}>Remove</button>
                </div>
                <div >
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts