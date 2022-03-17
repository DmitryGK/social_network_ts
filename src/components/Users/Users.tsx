import React from 'react'
import { UserDataType } from '../../Redux/users-reducer'
import s from './Users.module.css'
import userPhoto from './../../pictures/avatars/ava.png'

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    usersPage: UserDataType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }



    return <div className={s.users}>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                    onClick={(e) => { props.onPageChanged(p) }}
                >{p}</span>
            })}
        </div>
        {
            props.usersPage.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={(u.photos.small != null ? u.photos.small : userPhoto) as string} alt={'avatar'}
                            className={s.ava} />
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