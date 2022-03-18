import { PostsDataType } from "./store";

type AddPostActionType = {
    type: 'ADD-POST'
}

type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE'
    profile: ProfilePageType
}

type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileActionType


type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string
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
    profile: null
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {

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
export const setUserProfile = (profile: ProfilePageType): SetUserProfileActionType => {
    return {
        type: 'SET_USER_PROFILE', profile
    }
}
export default profileReducer