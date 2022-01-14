import m from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={m.postsBlock}>
            <h3>My posts</h3>
            <div >
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div >
                    <Post message='Hi, how are you?' likecount='20'/>
                    <Post message=' It is my first post' likecount='15'/>

                </div>
            </div>
        </div>
    )
}

export default MyPosts