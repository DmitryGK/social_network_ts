import axios from "axios";
import { UsersPropsType } from "./UsersContainer";
import userPhoto from './../../pictures/avatars/ava.png'
import { UserDataType } from "../../Redux/users-reducer";
import React from "react";
import s from './Users.module.css'


class Users extends React.Component<UsersPropsType, UserDataType> {


    componentDidMount() {
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: { data: { items: UserDataType[], totalCount: number}; }) => {
                debugger
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    ;
    

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: { data: { items: UserDataType[], totalCount: number }; }) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        console.log(pages);
        
        return <div className={s.users}>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? s.selectedPage : ''}
                        onClick={(e) => { this.onPageChanged(p)}}
                    >{p}</span>
                })}
            </div>
            {
                this.props.usersPage.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={(u.photos.small != null ? u.photos.small : userPhoto) as string} alt={'avatar'}
                                className={s.ava} />
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