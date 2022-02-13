const initialState = {
    defaultTab: 'caffeine'
}

export const SET_MENU_TAB = 'SET_MENU_TAB'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MENU_TAB: return {
            ...state,
            defaultTab: action.payload
        }
        default:
            return {
                ...state
            }
    }
}

export default reducer