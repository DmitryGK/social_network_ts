import axios from "axios";
import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect, MapStateToProps } from "react-redux";
import {  ProfileType, setUserProfile } from "../../Redux/profile-reducer";
import { AppStateType } from "../../Redux/redux-store";
import { RouteComponentProps, withRouter } from "react-router-dom";


type PathParamsType = {
    userId: string
} 

type MapStateToPropsType = {
    // postsData: Array<PostsDataType>
    // newPostText: string
    profile: ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            }) 
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent)