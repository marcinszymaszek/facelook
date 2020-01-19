import { INCREMENT_FRIENDS, DECREMENT_FRIENDS } from '../actions/constants.js';

const initialState = 0;

export const friendsCounter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_FRIENDS:
            return {counter : + 1};
        case DECREMENT_FRIENDS:
            return {counter : - 1};
        default:
            return {counter : state};
    }
};
