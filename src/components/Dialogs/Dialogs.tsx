import React from 'react'
import d from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string,
    id: number
}

type MessagePropsType ={
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={d.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:MessagePropsType) => {
    return (
        <div className={d.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <DialogItem name='Svetlana' id={1}/>
                <DialogItem name='Dmitry' id={2}/>
                <DialogItem name='Alexander' id={3}/>
                <DialogItem name='Oleg' id={4}/>
                <DialogItem name='Kirill' id={5}/>
                <DialogItem name='Ignat' id={6}/>
            </div>
            <div className={d.messagesItems}>
                <Message message='Hello'/>
                <Message message='Where is my money'/>
                <Message message='Call me back!'/>
                <Message message='Happy new year!'/>
            </div>
        </div>
    )
}

