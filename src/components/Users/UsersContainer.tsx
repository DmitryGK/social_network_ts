import { connect } from "react-redux";
import { follow, setUsers, unfollow, UserDataType, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress } from "../../Redux/users-reducer";
import { AppStateType } from "../../Redux/redux-store";
import React from "react";
import { Users } from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { userAPI } from "../../api/api";

type MapStateToPropsType = {
    usersPage: Array<UserDataType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followInformationIsLoading: boolean
    followingInProgress: number[]
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserDataType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType



class UsersContainer extends React.Component<UsersPropsType, UserDataType> {


    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI.getUser(this.props.currentPage, this.props.pageSize)
            .then((data: { items: UserDataType[], totalCount: number }) => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.toggleIsFetching(false)
            })

    }



    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        userAPI.getUser(this.props.pageSize, pageNumber)
            .then((data: { items: UserDataType[], totalCount: number }) => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
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
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followInformationIsLoading: state.usersPage.followInformationIsLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress
})(UsersContainer)



