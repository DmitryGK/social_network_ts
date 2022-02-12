import {ActionsTypes, AddPostActionType, PostsDataType, ProfilePageType, UpdateNewPostTextActionType} from "./State";

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsDataType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.postsData.push(newPost)
            state.newPostText = '';
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
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