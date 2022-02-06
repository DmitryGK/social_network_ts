import React from 'react'
import d from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../Redux/State";


type DialogsPropsType = {
    dialogsData: DialogsPageType
    addMessage: (messageText: string) => void
    updateNewMessageText: (newMessageText: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {


    const newMessageText = React.createRef<HTMLTextAreaElement>()
    const sendMessage = () => {
        if (newMessageText.current) {
            props.addMessage(newMessageText.current.value)
            newMessageText.current.value = ''
        }

    }

    const onMessageChange = () => {
        if (newMessageText.current) {
            props.updateNewMessageText(newMessageText.current.value)
        }
    }

    const messagesElements = props.dialogsData.messagesData.map(message => <Message message={message.message}/>)
    const dialogsElements = props.dialogsData.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messagesItems}>
                {messagesElements}
                <textarea className={d.textarea}
                          ref={newMessageText}
                          onChange={onMessageChange}/>
                <div>
                    <button className={d.sendButton} onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

