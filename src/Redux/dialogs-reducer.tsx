import {
    ActionsTypes,
    AddMessageActionType,
    DialogsPageType,
    MessagesDataType,
    UpdateNewMessageTextActionType
} from "./store";

const initialState = {
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
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {


    switch (action.type) {
        case "ADD-MESSAGE": {
            const newMessage: MessagesDataType = {
                id: 5,
                message: state.newMessageText
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            }
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default: return state
    }

}

export const addMessageActionCreator = (): AddMessageActionType => {
    return {
        type: 'ADD-MESSAGE'
    }
}
export const updateNewMessageTextActionCreator = (newMessageText: string):UpdateNewMessageTextActionType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: newMessageText
    }
}

export default dialogsReducer