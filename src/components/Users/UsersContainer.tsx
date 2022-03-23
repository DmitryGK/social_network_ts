import { connect } from "react-redux";
import { follow, setUsers, unfollow, UserDataType, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../Redux/users-reducer";
import { AppStateType } from "../../Redux/redux-store";
import React from "react";
import axios from "axios";
import { Users } from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { userAPI } from "../../api/api";

type MapStateToPropsType = {
    usersPage: Array<UserDataType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserDataType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType



class UsersContainer extends React.Component<UsersPropsType, UserDataType> {


    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI.getUser(this.props.currentPage, this.props.pageSize)
            .then((data: { items: UserDataType[], totalCount: number }) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }
    ;


    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        userAPI.getUser(this.props.pageSize, pageNumber)
            .then((data: { items: UserDataType[], totalCount: number }) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                usersPage={this.props.usersPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>

    }

}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer)



