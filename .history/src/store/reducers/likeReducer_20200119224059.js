import { SET_DISLIKE, SET_LIKE } from '../actions/constants.js';

const initialState = true;

export const like = (state = initialState, action) => {
    switch (action.type) {
        case SET_DISLIKE:
            return !state;
        case SET_LIKE:
            return state;
        default:
            return state;
    }
};