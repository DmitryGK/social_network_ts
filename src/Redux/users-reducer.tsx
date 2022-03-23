const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type InitialStateType = {
    users: Array<UserDataType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followInformationIsLoading: boolean
    followingInProgress: number[]
}
type UsersReducerActionType = FollowActionType |
    UnfollowActionType | SetUsersActionType |
    SetCurrentPageActionType | SetTotalUserCountActionType | ToggleIsFetchingActionType | ToggleIsFollowingProgressActionType

type ToggleIsFollowingProgressActionType = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    followInformationIsLoading: boolean
    userId: number
}

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
type ToggleIsFetchingActionType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
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
export type SetTotalUserCountActionType = {
    type: 'SET_TOTAL_USERS_COUNT'
    totalUsersCount: number
}

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followInformationIsLoading: true,
    followingInProgress: []
}

console.log(initialState.isFetching)
const usersReducer = (state: InitialStateType = initialState, action: UsersReducerActionType): InitialStateType => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followInformationIsLoading
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId
                    )
            }
        }
        default:
            return state
    }
}


export const follow = (userId: number) => ({ type: FOLLOW, userId })
export const unfollow = (userId: number) => ({ type: UNFOLLOW, userId })
export const setUsers = (users: Array<UserDataType>) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (followInformationIsLoading: boolean, userId: number) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, followInformationIsLoading, userId })
export default usersReducer