import { configureStore } from '@reduxjs/toolkit';
import knownWordCounterReducer from '../components/topElements/progressBar/ProgressBarSlice';
import wordsToRender from '../components/mediumElements/WordsToRenderSlice';
import bookmarksContext from '../components/BookmarksContextSlice';
import authContext from '../components/auth/AuthSlice';

const rootReducer = (state = {}, action) => {
    const activeBookmark = state.bookmark;
    return {
        knowWord: knownWordCounterReducer(state.knowWord, action),
        bookmark: bookmarksContext(state.bookmark, action),

        // merge activeBookmark with original action object
        wordsToRender: wordsToRender(state.wordsToRender, { ...action, activeBookmark }),
        auth: authContext(state.auth, action)
    };
};

const store = configureStore({
    reducer: rootReducer
});
export default store;