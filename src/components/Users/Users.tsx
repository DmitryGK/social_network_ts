import  axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import userPhoto from './../../pictures/avatars/ava.png'


const Users = (props: UsersPropsType) => {

    if (props.usersPage.usersData.length === 0) {
        debugger
       axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
           props.setUsers(response.data.items)
       })

        // props.setUsers(
        //     [
        //         {
        //             id: 1,
        //             avatar: './../../pictures/avatars/ava1.jpg',
        //             followed: false,
        //             fullName: 'Dmitry',
        //             status: 'I am a boss',
        //             location: {city: 'Minsk', country: 'Belarus'}
        //         },
        //         {
        //             id: 2,
        //             avatar: './../../pictures/avatars/ava2.jpg',
        //             followed: true,
        //             fullName: 'Alexander',
        //             status: 'I am a boss too',
        //             location: {city: 'Moscow', country: 'Russia'}
        //         },
        //         {
        //             id: 3,
        //             followed: true,
        //             avatar: './../../pictures/avatars/ava3.jpg',
        //             fullName: 'Svetlana',
        //             status: 'I am a boss too',
        //             location: {city: 'Kiev', country: 'Ukraine'}
        //         },
        //         {
        //             id: 4,
        //             avatar: './../../pictures/avatars/ava4.jpg',
        //             followed: false,
        //             fullName: 'Oleg',
        //             status: 'I am a boss too',
        //             location: {city: 'LA', country: 'USA'}
        //         },
        //
        //     ]
        // )
    }


    return (
        <div>
            {
                props.usersPage.usersData.map(u => <div key={u.id}>
                <span>
                    <div>
                            <img src={(u.photos.small  != null ? u.photos.small : userPhoto ) as string} alt={'avatar'}/>
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
    )
}

    export default Users