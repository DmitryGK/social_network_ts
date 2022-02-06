import {rerenderEntireTree} from "../render";

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
type SidebarType = Array<{ id: number, name: string }>
export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


let state: RootStateType = {
    profilePage: {
        newPostText: '',
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 20},
            {id: 2, message: 'First try', likesCount: 15},
            {id: 3, message: 'Yo', likesCount: 1},
            {id: 4, message: 'Solo', likesCount: 10},
            {id: 5, message: '....', likesCount: 35}
        ]
    },
    dialogsPage: {
        newMessageText: '',
        dialogsData: [
            {id: 1, name: 'Svetlana'},
            {id: 2, name: 'Dmitry'},
            {id: 3, name: 'Alexander'},
            {id: 4, name: 'Oleg'},
            {id: 5, name: 'Kirill'},
            {id: 6, name: 'Ignat'}
        ],
        messagesData: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Where is my money?'},
            {id: 3, message: 'Call me back!'},
            {id: 4, message: 'Happy new year!'},
        ]
    },
    sidebar: [
        {id: 1, name: 'user1'},
        {id: 2, name: 'user2'},
        {id: 3, name: 'user3'}
    ]
}


export const addPost = (postText: string) => {

    const newPost: PostsDataType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const addMessage = (messageText: string) => {
    const newMessage: MessagesDataType = {
        id: 5,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messagesData.push(newMessage)
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}
export const updateNewMessageText = (newText: string) => {
    state.dialogsPage.newMessageText = newText
    rerenderEntireTree(state)
}


export default state

