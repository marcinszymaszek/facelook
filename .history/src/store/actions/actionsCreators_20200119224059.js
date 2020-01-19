import {
    INCREMENT,
    DECREMENT,
    SET_LIKE,
    SET_DISLIKE
} from './constants';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const like = () => {
    return {
        type: SET_LIKE
    }
}

export const dislike = () => {
    return {
        type: SET_DISLIKE
    }
}