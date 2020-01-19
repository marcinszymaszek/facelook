import {combineReducers} from 'redux';
import {counter} from './counterReducer';
import {like} from './likeReducer';

export const rootReducer = combineReducers({
    counter,
    like
});
