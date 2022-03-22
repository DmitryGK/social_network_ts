const SET_USER_DATA = 'SET_USER_DATA'

export type DataType = {
    id: number
    email: string
    login: string
    isAuth: boolean

}

// export type AuthType = {
//     data: DataType
//     resultCode: number
//     messages: Array<string>
// }

export type InitialStateType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}
type setUsersActionType = {
    type: 'SET_USER_DATA'
    data: DataType
}

const InitialState: InitialStateType = {
    id: 1,
    email: '',
    login: '',
    isAuth: false
}

type ActionType = setUsersActionType

const authReducer = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
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


export default authReducer