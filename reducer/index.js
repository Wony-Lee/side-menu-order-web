import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import modal from './modalReducer'

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        default: {
            const combineReducer = combineReducers({
                modal
            });
            return combineReducer(state, action);
        }
    }
};

export default rootReducer;