import {
    INCREMENT,
    DECREMENT,
    SET_LIKE,
    SET_DISLIKE
} from './constants';

export const increment = nr => {
    return {
        type: INCREMENT,
        payload: nr
    }
}

export const decrement = nr => {
    return {
        type: DECREMENT,
        payload: nr
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