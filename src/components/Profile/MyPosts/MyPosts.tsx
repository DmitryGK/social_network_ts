import m from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea/>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={m.posts}>
                <Post message='Hi, how are you?' likecount='20'/>
                <Post message=' It is my first post' likecount='15'/>

            </div>
        </div>
    )
}

export default MyPosts