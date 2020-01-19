import {
    INCREMENT,
    DECREMENT,
    LIKED,
    NOT_LIKED
} from './constants';

export const increment = () => {
    return {
        type : INCREMENT
    }
}

export const decrement = () => {
    return {
        type : DECREMENT
    }
}

export const setLiked = () => {
    return {
        type : LIKED
    }
}

export const setNotLiked = () => {
    return {
        type : NOT_LIKED
    }
}