import axios from "axios";
import React from "react";
import Profile from "./Profile";
import { connect, MapStateToProps } from "react-redux";
import { setUserProfile } from "../../Redux/profile-reducer";

type MapStateToPropsType = {

}
type MapDispatchToPropsType = {
    setUserProfile: (data: any) => void
}

type ProfilePropsType =  MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(response => {
            this.props.setUserProfile(response.data)
            
        })
    }


    render() {
        return (
            <Profile {...this.props}/>
        )
}

const mapStateToProps = () => ({
    profile: state.profilePage.profile
})
}

export default connect(mapStateToProps,{
    setUserProfile
})(ProfileContainer)