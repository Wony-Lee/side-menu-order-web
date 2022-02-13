const initialState = {
    modalState: false
}

export const SET_OPEN_MODAL = 'SET_OPEN_MODAL'
export const SET_CLOSE_MODAL = 'SET_CLOSE_MODAL'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OPEN_MODAL:
            return {
                ...state,
                modalState: true
            }
        case SET_CLOSE_MODAL:
            return {
                ...state,
                modalState: false
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;