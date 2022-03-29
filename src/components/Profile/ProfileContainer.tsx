import React from "react";
import Profile from "./Profile";
import { connect, MapStateToProps } from "react-redux";
import { getUserProfileTC, ProfileType, setUserProfile } from "../../Redux/profile-reducer";
import { AppStateType } from "../../Redux/redux-store";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { userAPI } from "../../api/api";


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfileTC: (userId: number) => void
}
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfileTC(parseFloat(userId))
    }

    render() {

        if (!this.props.isAuth) return <Redirect to='/login' />
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfileTC })(WithUrlDataContainerComponent)