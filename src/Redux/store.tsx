import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
}
export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsPageType = {
    newMessageText: string
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
export type SidebarType = Array<{ id: number, name: string }>
export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string
}
export type ActionsTypes = AddPostActionType | AddMessageActionType | UpdateNewMessageTextActionType | UpdateNewPostTextActionType

// const store:StoreType = {
//     _state:  {
//         profilePage: {
//             newPostText: '',
//             postsData: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: 20},
//                 {id: 2, message: 'First try', likesCount: 15},
//                 {id: 3, message: 'Yo', likesCount: 1},
//                 {id: 4, message: 'Solo', likesCount: 10},
//                 {id: 5, message: '....', likesCount: 35}
//             ]
//         },
//         dialogsPage: {
//             newMessageText: '',
//             dialogsData: [
//                 {id: 1, name: 'Svetlana'},
//                 {id: 2, name: 'Dmitry'},
//                 {id: 3, name: 'Alexander'},
//                 {id: 4, name: 'Oleg'},
//                 {id: 5, name: 'Kirill'},
//                 {id: 6, name: 'Ignat'}
//             ],
//             messagesData: [
//                 {id: 1, message: 'Hello'},
//                 {id: 2, message: 'Where is my money?'},
//                 {id: 3, message: 'Call me back!'},
//                 {id: 4, message: 'Happy new year!'},
//             ]
//         },
//         sidebar: [
//             {id: 1, name: 'user1'},
//             {id: 2, name: 'user2'},
//             {id: 3, name: 'user3'}
//         ]
//     },
//     getState () {
//         return this._state
//     },
//     _callSubscriber () {},
//     subscribe (callback) {
//         this._callSubscriber = callback
//     },
// //     dispatch(action){

// //         this._state.profilePage = profileReducer(this._state.profilePage, action)
// //         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
// //         this._state.sidebar = sidebarReducer(this._state.sidebar,action)
// //         this._callSubscriber()
// //     }
// // }




// export default store

