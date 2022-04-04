import { profileAPI, userAPI } from "../api/api"
import { DispatchType } from "./redux-store"


type AddPostActionType = {
    type: 'ADD-POST'
}
export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE'
    profile: ProfileType
}
type SetStatusActionType = {
    type: 'SET_STATUS'
    status: string
}
type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | SetUserProfileActionType
    | SetStatusActionType

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType

}
type InitialStateType = {
    postsData: Array<PostsDataType>
    newPostText: string
    profile: ProfileType
    status: string
}

const initialState = {
    newPostText: '',
    postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 20 },
        { id: 2, message: 'First try', likesCount: 15 },
        { id: 3, message: 'Yo', likesCount: 1 },
        { id: 4, message: 'Solo', likesCount: 10 },
        { id: 5, message: '....', likesCount: 35 }
    ],
    profile: {
        userId: 1,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: ''
        }
    },
    status: ''
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {

        case "ADD-POST": {
            const newPost: PostsDataType = {
                id: 10,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state, profile: action.profile
            }
        }
        case 'SET_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}


export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: 'ADD-POST'
    }
}
export const updateNewPostTextActionCreator = (newPostText: string): UpdateNewPostTextActionType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newPostText
    }
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET_USER_PROFILE', profile
    }
}
export const setStatus = (status: string) => {
    return {
        type: 'SET_STATUS', status
    }
}

export const getUserProfileTC = (userId: number) => (dispatch: DispatchType) => {

    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getStatusTC = (userId: number) => (dispatch: DispatchType) => {

    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatusTC = (status: string) => (dispatch: DispatchType) => {

    profileAPI.updateStatus(status).then(response => {

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}
export default profileReducer