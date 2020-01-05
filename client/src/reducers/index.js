import {combineReducers} from 'redux'
import knownWordCounterReducer from "../components/topElements/progressBar/ProgressBarSlice";
import showExampleContent from "../components/mediumElements/wordContent/WordContentSlice";


export default combineReducers({
    knowWord: knownWordCounterReducer,
    showContent: showExampleContent
})
