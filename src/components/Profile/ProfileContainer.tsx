import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getStatusTC, getUserProfileTC, ProfileType, setUserProfile, updateStatusTC } from "../../Redux/profile-reducer";
import { AppStateType } from "../../Redux/redux-store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType
    status: string

}
type MapDispatchToPropsType = {
    getUserProfileTC: (userId: number) => void
    getStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
    
}
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '22654'
        }
        this.props.getUserProfileTC(parseFloat(userId))
        this.props.getStatusTC(userId)
    }
    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatusTC={this.props.updateStatusTC}
            />
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfileTC, getStatusTC, updateStatusTC }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)



