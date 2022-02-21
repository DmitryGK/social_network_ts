import React from 'react'
import d from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsPageType,} from "../../Redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";


type DialogsPropsType = {}

const DialogsContainer = (props: DialogsPropsType) => {




    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().dialogsPage
                    const sendMessage = () => {
                        store.dispatch(addMessageActionCreator())

                    }

                    const onMessageChange = (newText: string) => {

                        store.dispatch(updateNewMessageTextActionCreator(newText))

                    }

                    return <Dialogs dialogsData={state}
                                    updateNewMessageText={onMessageChange}
                                    addMessageAction={sendMessage}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer