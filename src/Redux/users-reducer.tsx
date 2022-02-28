const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'USERS'

type InitialStateType = {
    usersData: Array<UsersDataType>
}
type LocationType = {
    city: string
    country: string
}
export type UsersDataType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
const initialState = {
    usersData: [
        {id: 1, followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} },
        {id: 2, followed: true, fullName: 'Alexander', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'} },
        {id: 3, followed: true, fullName: 'Svetlana', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'} },
        {id: 4, followed: false, fullName: 'Oleg', status: 'I am a boss too', location: {city: 'LA', country: 'USA'} },

    ]
}

const usersReducer = (state: InitialStateType = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map( u => {
                    if (u.id === action.userId) {
                        return{...u, followed: true}
                    }
                    return u
                } )
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map( u => {
                    if (u.id === action.userId) {
                        return{...u, followed: false}
                    }
                    return u
                } )
            }
        }
        case SET_USERS : {
            return
        }
        default :
            return state
    }
}


export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UsersDataType>)=> ({type: SET_USERS, users})
export default usersReducer