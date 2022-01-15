import m from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
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
                    <Post message='Hi, how are you?' likecount='20'/>
                    <Post message='It is my first post' likecount='15'/>
                    <Post message='Yo' likecount='1'/>
                    <Post message='Yp YO' likecount='10'/>
                    <Post message='....' likecount='23'/>

                </div>
            </div>
        </div>
    )
}

export default MyPosts