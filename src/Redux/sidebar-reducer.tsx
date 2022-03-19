
type ActionsType = {

}
export type SidebarType = Array<{ id: number, name: string }>

const initialState = [
    {id: 1, name: 'user1'},
    {id: 2, name: 'user2'},
    {id: 3, name: 'user3'}
]

const sidebarReducer = (state: SidebarType = initialState, action: ActionsType) => {

    return state
}

export default sidebarReducer