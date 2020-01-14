import {combineReducers} from 'redux'
import knownWordCounterReducer from "../components/topElements/progressBar/ProgressBarSlice";
import wordsToRender from "../components/mediumElements/WordsToRenderSlice";
import bookmarksContext from "../components/BookmarksContextSlice";

export default combineReducers({
    knowWord: knownWordCounterReducer,
    wordsToRender: wordsToRender,
    bookmark: bookmarksContext,
})
