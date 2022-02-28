import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import MyPosts from "./MyPosts";


type mapStateToPropsType = {
    updateNewPostText: (newText: string) => void
    addPost: () => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        postsData: state.profilePage.postsData
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapStateToPropsType => {
    return {
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextActionCreator(newText))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer