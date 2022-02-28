import React from 'react'
import d from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType,} from "../../Redux/store";


type DialogsPropsType = {
    dialogsData: DialogsPageType
    updateNewMessageText: (newText: string) => void
    addMessageAction: () => void
}
 const Dialogs = (props: DialogsPropsType) => {


    const newMessageText = React.createRef<HTMLTextAreaElement>()
    const sendMessage = () => {
        if (newMessageText.current) {
            props.addMessageAction()
            newMessageText.current.value = ''
        }

    }

    const onMessageChange = () => {
        if (newMessageText.current) {
            const newText = newMessageText.current.value
            props.updateNewMessageText(newText)
        }
    }

    const messagesElements = props.dialogsData.messagesData.map(message => <Message message={message.message} key={message.id}/>)
    const dialogsElements = props.dialogsData.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)

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
export default Dialogs

