import { LIKE_UPDATE_FLAG } from '../actions/constants.js';

const initialState = true;

export const likeUpdateFlag = (state = initialState, action) => {
    switch (action.type) {
        case LIKE_UPDATE_FLAG:
            return !state;
        default:
            return state;
    }
};