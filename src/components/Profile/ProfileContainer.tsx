import axios from "axios";
import React from "react";
import Profile from "./Profile";
import { connect, MapStateToProps } from "react-redux";
import { PostsDataType, ProfileType, setUserProfile } from "../../Redux/profile-reducer";
import { AppStateType } from "../../Redux/redux-store";
import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";

type MapStateToPropsType = {
    postsData: Array<PostsDataType>
    newPostText: string
    profile: ProfileType
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
            <Profile {...this.props} profile={this.props.profile}/>
        )
}


}
const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})



function withRouter() {
    function WithUrlDataContainerComponent(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Profile
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return WithUrlDataContainerComponent;
  }


export default connect(mapStateToProps,{ setUserProfile })(withRouter(ProfileContainer))