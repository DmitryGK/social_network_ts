import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import userPhoto from './../../pictures/avatars/ava.png'


const Users = (props: UsersPropsType) => {
    if (props.usersPage.length === 0) {
       axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
           props.setUsers(response.data.items)
       })

    }


    return <div>
            {
                props.usersPage.map(u => <div key={u.id}>
                <span>
                    <div>
                            {/*<img src={(u.photos.small  != null ? u.photos.small : userPhoto ) as string} alt={'avatar'}/>*/}
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }

                    </div>
                </span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                    <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
                </div>)

            }
        </div>

}

    export default Users