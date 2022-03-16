const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


export type InitialStateType = {
    users: Array<UserDataType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type UsersReducerActionType = FollowActionType | UnfollowActionType | SetUsersActionType | SetCurrentPageActionType | setTotalUserCountActionType

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
type SetCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
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
export type setTotalUserCountActionType = {
    type: 'SET_TOTAL_USERS_COUNT'
    totalUsersCount: number
}

const initialState = {
    users: [ ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1
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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT : {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        default :
            return state
    }
}


export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserDataType>)=> ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export default usersReducer