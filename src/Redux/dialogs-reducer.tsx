import {
    ActionsTypes,
    AddMessageActionType,
    DialogsPageType,
    MessagesDataType,
    UpdateNewMessageTextActionType
} from "./State";

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {


    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessagesDataType = {
                id: 5,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage)
            return state
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newText
            return state
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