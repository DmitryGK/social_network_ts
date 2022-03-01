const Users = () => {

    if (props.usersData.length === 0) {

    props.setUsers(
        [
            {id: 1, followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} },
            {id: 2, followed: true, fullName: 'Alexander', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'} },
            {id: 3, followed: true, fullName: 'Svetlana', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'} },
            {id: 4, followed: false, fullName: 'Oleg', status: 'I am a boss too', location: {city: 'LA', country: 'USA'} },

        ]


)


    }


    return <div>
        {
            props.usersData.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img/>
                        </div>
                        <div>
                            {u.followed
                                ? <button>Follow</button>
                                : <button>Unfollow</button>}
                                </div>
                                </span>
                <span>
                                <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                                </span>
                                <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                                </span>
                                </span>
                )

            </div>

        }

        export default Users