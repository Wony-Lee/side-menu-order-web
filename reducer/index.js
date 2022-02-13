import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import modal from './modalReducer'
import menu from './menuReducer'

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        default: {
            const combineReducer = combineReducers({
                modal,
                menu
            });
            return combineReducer(state, action);
        }
    }
};

export default rootReducer;