import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import APIReducer from './API-reducer';
// Combine Reducers
var reducers = combineReducers({
    api: APIReducer,
    form: formReducer
});

export default reducers;