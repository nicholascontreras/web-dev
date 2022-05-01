import {CLEAR_SESSION, CREATE_SESSION} from "../actions/session-actions";

const initialState = false;
const sessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_SESSION:
            return {
                ...state,
                "username": action["username"],
                "_id": action["_id"]
            };
        case CLEAR_SESSION:
            return false;
        default:
            return state;
    }
};

export default sessionReducer