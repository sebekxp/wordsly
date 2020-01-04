import { combineReducers } from 'redux'
import knownWordCounterReducer from "../features/KnownWordCounterSlice";
import showExampleContentReducer from "../features/ShowExampleContextSlice";

export default combineReducers({
    knowWord: knownWordCounterReducer,
    showExample: showExampleContentReducer
})
