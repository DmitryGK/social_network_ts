import React from 'react'
import { UserDataType } from '../../Redux/users-reducer'
import s from './Users.module.css'
import userPhoto from './../../pictures/avatars/_Ninja-2-512.webp'
import { NavLink } from 'react-router-dom'


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    usersPage: UserDataType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingProgress: (followInformationIsLoading: boolean, userId: number) => void
    followingInProgress: number[]
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
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
            props.usersPage.map(u => <div key={u.id} className={s.userModule}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={(u.photos.small != null ? u.photos.small : userPhoto) as string} alt={'avatar'}
                                className={s.ava} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.button} onClick={() => {
                                props.unfollowThunkCreator(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.button} onClick={() => {
                                props.followThunkCreator(u.id)
                            }}>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>

                </span>
            </div>)

        }
    </div>
}