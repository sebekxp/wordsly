import {combineReducers} from 'redux'
import knownWordCounterReducer from "../components/topElements/progressBar/ProgressBarSlice";
import showExampleContent from "../components/mediumElements/wordContent/WordContentSlice";
import wordsToRender from "../components/mediumElements/WordsToRenderSlice";
import bookmarksContext from "../components/BookmarksContextSlice";
import favWordsToRender from "../components/topElements/bookmarks/favorites/FavoritesSlice";

export default combineReducers({
    knowWord: knownWordCounterReducer,
    showContent: showExampleContent,
    wordsToRender: wordsToRender,
    bookmark: bookmarksContext,
    favWordsToRender: favWordsToRender,
})
