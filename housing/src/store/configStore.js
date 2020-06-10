import { createStore, combineReducers } from 'redux';
import fileReducer from '../reducers/fileReducers'

export default () => {
    return createStore(combineReducers({
        resident : fileReducer
    }))
}