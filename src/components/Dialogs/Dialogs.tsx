import React from 'react'
import d from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string,
    id: number
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={d.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={d.message}>{props.message}</div>
    )
}

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Svetlana'},
        {id: 2, name: 'Dmitry'},
        {id: 3, name: 'Alexander'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Kirill'},
        {id: 6, name: 'Ignat'}
    ]

    let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Where is my money?'},
        {id: 3, message: 'Call me back!'},
        {id: 4, message: 'Happy new year!'},

    ]

    let messagesElements = messagesData.map(message => <Message message={message.message}/>)

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

