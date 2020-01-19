import {
    INCREMENT_FRIENDS,
    DECREMENT_FRIENDS,
    LIKED_APP,
    NOT_LIKED_APP
} from './constants';

export const incrementFriends = () => {
    return {
        type: INCREMENT_FRIENDS
    }
}

export const decrementFriends = () => {
    return {
        type: DECREMENT_FRIENDS
    }
}

export const setLikedApp = () => {
    return {
        type: LIKED_APP
    }
}

export const setNotLikedApp = () => {
    return {
        type: NOT_LIKED_APP
    }
}