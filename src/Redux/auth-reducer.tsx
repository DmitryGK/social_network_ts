import { authAPI } from "../api/api"
import { DispatchType } from "./redux-store"

const SET_USER_DATA = 'SET_USER_DATA'

export type DataType = {
    id: number
    email: string
    login: string
    
}


export type AuthStateType = {
    data: DataType
    isAuth: boolean
    resultCode: number
    messages: Array<string>
    email: string
    id: number
    login: string
}
type setUsersActionType = {
    type: 'SET_USER_DATA'
    data: DataType
}

const InitialState: AuthStateType = {
    data: {
        id: 1,
        email: '',
        login: 'fsfgsfg',
        
    },
    isAuth: false,
    login: '',
    id: 1,
    email: '',
    resultCode: 0,
    messages: []

}

type ActionType = setUsersActionType

const authReducer = (state: AuthStateType = InitialState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true

                
            }
        default:
            return state
    }
}

export const setUserData = (id: number, email: string, login: string) => ({ type: SET_USER_DATA, data: { id, email, login } })

export const getAuthUserDataTC = () => (dispatch: DispatchType) => {
    authAPI.me().then((response: {
                
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
            dispatch(setUserData(id, email, login))
        }
    })
} 

export default authReducer