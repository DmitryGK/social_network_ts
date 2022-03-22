import axios from "axios";
import { connect } from "react-redux";
import {  DataType, setUserData } from "../../Redux/auth-reducer";
import Header from "./Header";
import React from 'react';



type MapStateToPropsType = {
    data: DataType
    resultCode: number
    messages: Array<string>
}
    

type MapDispatchToPropsType = {
    setUserData: (data: DataType) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType, DataType> {

    componentDidMount() {
        axios.get (`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data
                    this.props.setUserData()
                }
        })
    }


    render (){
            return <Header {...this.props}/>
    }
}

const mapStateToProps = () => ({})
export default connect(mapStateToProps, {setUserData})(HeaderContainer)