import {  NOT_LIKED_APP } from '../actions/constants.js';

const initialState = true;

export const appOpinion = (state = initialState, action) => {
    switch (action.type) {
        case NOT_LIKED_APP:
            return !state;
        default:
            return state;
    }
};