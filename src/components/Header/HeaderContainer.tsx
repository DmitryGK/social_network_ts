import axios from "axios";
import { connect } from "react-redux";
import { DataType, setUserData } from "../../Redux/auth-reducer";
import Header from "./Header";
import React from 'react';
import store, { AppStateType } from "../../Redux/redux-store";



type MapStateToPropsType = {
    data: DataType
    isAuth: boolean
    login: string
    email: string
    // resultCode: number
    // messages: Array<string>
}


type MapDispatchToPropsType = {
    setUserData: (id: number, email: string, login: string) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType, DataType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response: {
                
                data:
                {
                    data: {
                        id: number,
                        email: string,
                        login: string
                    },
                    isAuth: boolean,
                    resultCode: number,
                    messages: Array<string>,
                    login: string,
                    id: number,
                    email: string
                }
            }) => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    this.props.setUserData(id, email, login)
                }
            })
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
export default connect(mapStateToProps, { setUserData })(HeaderContainer)