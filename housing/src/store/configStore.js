import { createStore, combineReducers } from 'redux';
import fileReducer from '../reducers/fileReducers'
import requestReducers from '../reducers/requestReducers'
import userReducers from '../reducers/userReducers'

export default () => {
    return createStore(combineReducers({
        resident : fileReducer,
        request : requestReducers,
        users : userReducers
    }))
}