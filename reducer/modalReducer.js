const initialState = {
    modalState: false,
    menuItem: {},
}

export const SET_OPEN_MODAL = 'SET_OPEN_MODAL'
export const SET_CLOSE_MODAL = 'SET_CLOSE_MODAL'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OPEN_MODAL:
            console.log('modalReducer ==> ', action.payload)
            return {
                ...state,
                modalState: true,
                menuItem: action.payload,
            }
        case SET_CLOSE_MODAL:
            console.log('Close Modal', action.payload)
            return {
                ...state,
                modalState: false,
                menuItem: action.payload,
            }
        default:
            return state
    }
}

export default reducer;