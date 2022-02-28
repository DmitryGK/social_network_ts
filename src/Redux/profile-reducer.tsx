import {ActionsTypes, AddPostActionType, PostsDataType, ProfilePageType, UpdateNewPostTextActionType} from "./store";

const initialState = {
        newPostText: '',
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 20},
            {id: 2, message: 'First try', likesCount: 15},
            {id: 3, message: 'Yo', likesCount: 1},
            {id: 4, message: 'Solo', likesCount: 10},
            {id: 5, message: '....', likesCount: 35}
        ]
    }

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostsDataType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy
        }
        case "UPDATE-NEW-POST-TEXT": {
            let stateCopy = {...state}

            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default :
            return state
    }
}


export const addPostActionCreator = ():AddPostActionType => {
    return {
        type: 'ADD-POST'
    }
}
export const updateNewPostTextActionCreator = (newPostText: string):UpdateNewPostTextActionType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newPostText
    }
}
export default profileReducer