const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type InitialStateType = {
    users: Array<UserDataType>
}
type UsersReducerActionType = FollowActionType | UnfollowActionType | SetUsersActionType

type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}
type UnfollowActionType = {
    type: "UNFOLLOW"
    userId: number
}
type SetUsersActionType = {
    type: 'SET-USERS'
    users: Array<UserDataType>
}
type LocationType = {
    city: string
    country: string
}
export type UserDataType = {
    id: number
    photos: string
    followed: boolean
    name: string
    status: string
    location: LocationType
}
const initialState = {
    users: []
}


const usersReducer = (state: InitialStateType = initialState, action: UsersReducerActionType): InitialStateType => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
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
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return{...u, followed: false}
                    }
                    return u
                } )
            }
        }
        case SET_USERS : {
            return {...state, users: [...state.users, ...action.users]}
        }
        default :
            return state
    }
}


export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserDataType>)=> ({type: SET_USERS, users})
export default usersReducer