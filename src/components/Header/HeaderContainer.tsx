import axios from "axios";
import { connect } from "react-redux";
import { DataType, getAuthUserDataTC, setUserData } from "../../Redux/auth-reducer";
import Header from "./Header";
import React from 'react';
import  { AppStateType } from "../../Redux/redux-store";
import { authAPI } from "../../api/api";



type MapStateToPropsType = {
    data: DataType
    isAuth: boolean
    login: string
    email: string
}


type MapDispatchToPropsType = {
    getAuthUserDataTC: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType, DataType> {

    componentDidMount() {
       this.props.getAuthUserDataTC()
    }


    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    data: state.auth.data,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
})
export default connect(mapStateToProps, { getAuthUserDataTC })(HeaderContainer)