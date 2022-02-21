import React from 'react'
import d from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsPageType,} from "../../Redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";


type DialogsPropsType = {
    dialogsData: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

 const DialogsContainer = (props: DialogsPropsType) => {


    const sendMessage = () => {
            props.dispatch(addMessageActionCreator())

    }

    const onMessageChange = (newText: string) => {

            props.dispatch(updateNewMessageTextActionCreator(newText))

    }

    return <Dialogs dialogsData={props.dialogsData} updateNewMessageText={onMessageChange} addMessageAction={sendMessage}/>
}

export default DialogsContainer