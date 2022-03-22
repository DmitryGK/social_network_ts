const SET_USER_DATA = 'SET_USER_DATA'

export type DataType =  {
    id: number
    email: string
    login: string

}

export type AuthType = {
    data: DataType
    resultCode: number
    messages: Array<string>
}

type InitialStateType = {
    id: number
    email: string
    login: string
}
type setUsersActionType = {
    type: 'SET_USER_DATA'
    data: InitialStateType
} 

const InitialState: AuthType = {
   data: {
       id: null,
       email: null,
       login: null
   },
   resultCode: null,
   messages: null
}

type ActionType = setUsersActionType

const authReducer = (state: AuthType = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
    }
}

export const setUserData = (id: number, email: string, login: string) => ({type: SET_USER_DATA, data : {id, email, login}})


export default authReducer