import m from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {

    let postsData = [
        {id:1, message: 'Hi, how are you?', likesCount: 20},
        {id:2, message: 'First try', likesCount: 15},
        {id:3, message: 'Yo', likesCount: 1},
        {id:4, message: 'Solo', likesCount: 10},
        {id:5, message: '....', likesCount: 35}
    ]

    let postsElements = postsData.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

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