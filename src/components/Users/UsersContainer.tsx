import { connect } from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, UsersDataType} from "../../Redux/users-reducer";
import {Dispatch} from "redux";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        serUsers: (users:Array<UsersDataType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer