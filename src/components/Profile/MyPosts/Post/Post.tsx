import p from './Post.module.css'
import ava1 from '../../../../pictures/ava1.jpg'

type PostType = {
    message: string
    likesCount: number
}

const Post = (props: PostType) => {
    return (
        <div className={p.item}>
            <div>
                <img src={ava1} alt={ava1}/>
            </div>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post