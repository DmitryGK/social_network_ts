import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/redux-store";
import { Dispatch } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";


type mapDispatchToPropsType = {
    updateNewMessageText: (newText: string) => void
    addMessageAction: () => void
}



const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsData: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewMessageText: (newText: string) => {
            dispatch(updateNewMessageTextActionCreator(newText))
        },
        addMessageAction: () => {
            dispatch(addMessageActionCreator())
        }
    }
}


const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default DialogsContainer