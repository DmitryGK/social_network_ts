import axios from "axios";
import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect, MapStateToProps } from "react-redux";
import {  ProfileType, setUserProfile } from "../../Redux/profile-reducer";
import { AppStateType } from "../../Redux/redux-store";
import { withRouter } from "react-router-dom";




type MapStateToPropsType = {
    // postsData: Array<PostsDataType>
    // newPostText: string
    profile: ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (data: any) => void
}

type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent)