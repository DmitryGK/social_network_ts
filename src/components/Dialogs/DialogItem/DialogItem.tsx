import d from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    name: string
    id:number
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={d.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem