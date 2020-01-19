import {combineReducers} from 'redux';
import {friendsCounter} from './friendsCounterReducer';
import {appOpinion} from './appOpinionReducer';

export const rootReducer = combineReducers({
    friendsCounter,
    appOpinion
});
