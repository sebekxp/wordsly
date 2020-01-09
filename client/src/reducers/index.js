import {combineReducers} from 'redux'
import knownWordCounterReducer from "../components/topElements/progressBar/ProgressBarSlice";
import showExampleContent from "../components/mediumElements/wordContent/WordContentSlice";
import wordsToRender from "../components/mediumElements/WordsToRenderSlice";

export default combineReducers({
    knowWord: knownWordCounterReducer,
    showContent: showExampleContent,
    wordsToRender: wordsToRender
})
