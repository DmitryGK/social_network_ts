import React from 'react'
import d from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../Redux/State";


type DialogsPropsType = {
    dialogsData: DialogsPageType
}

export const Dialogs = (props:DialogsPropsType) => {




    let messagesElements = props.dialogsData.messagesData.map(message => <Message message={message.message}/>)
    let dialogsElements = props.dialogsData.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messagesItems}>
                {messagesElements}
            </div>
        </div>
    )
}

