const initialState = {
    modalState: false,
    menuItem: {

    },
    count: 0
}

export const SET_OPEN_MODAL = 'SET_OPEN_MODAL'
export const SET_CLOSE_MODAL = 'SET_CLOSE_MODAL'
export const MENU_COUNT_UP = 'MENU_COUNT_UP'
export const MENU_COUNT_DOWN = 'MENU_COUNT_DOWN'
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OPEN_MODAL:
            console.log('modalReducer ==> ', action.payload)
            return {
                ...state,
                modalState: true,
                menuItem: action.payload
            }
        case SET_CLOSE_MODAL:
            return {
                ...state,
                modalState: false
            }
        case MENU_COUNT_UP:
            return {
                ...state,
                count: action.payload
            }
        case MENU_COUNT_DOWN:
            return {
                ...state,
                count: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;