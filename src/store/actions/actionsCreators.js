import {
    INCREMENT,
    DECREMENT,
    LIKE_UPDATE_FLAG,
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

export const toggleLikeUpdateFlag = () => {
    return {
        type: LIKE_UPDATE_FLAG
    }
}
