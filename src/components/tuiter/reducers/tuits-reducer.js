import {UPDATE_TUIT, CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS} from "../../../actions/tuits-actions";

const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_TUIT:
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                    action.tuit : tuit);
        case CREATE_TUIT:
            return [
                action.newTuit,
                ...state
            ];
        case DELETE_TUIT:
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case FIND_ALL_TUITS:
            return action.tuits;
        default:
            return state;
    }
}
export default tuitsReducer;