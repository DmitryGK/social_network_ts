import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import userPhoto from './../../pictures/avatars/ava.png'
import {UserDataType} from "../../Redux/users-reducer";
import React from "react";
import s from './Users.module.css'


class Users extends React.Component<UsersPropsType, UserDataType> {


    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response: { data: { items: UserDataType[]; }; }) => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div className={s.users}>
            {
                this.props.usersPage.map(u => <div key={u.id}>
                <span>
                    <div>
                            <img src={(u.photos.small != null ? u.photos.small : userPhoto) as string} alt={'avatar'}
                                 className={s.ava}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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

}


export default Users