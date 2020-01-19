import {combineReducers} from 'redux';
import {counter} from './counterReducer';
import {likeUpdateFlag} from './likeUpdateFlagReducer';

export const rootReducer = combineReducers({
    counter,
    likeUpdateFlag
});
