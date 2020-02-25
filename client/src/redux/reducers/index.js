import { configureStore } from '@reduxjs/toolkit';
import progressBar from '../progressBarReducer';
import wordsToRender from '../wordsToRenderReducer';
import bookmarksContext from '../bookmarkReducer';
import authContext from '../authReducer';
import authError from '../authErrorReducer';

// Custom combine reducers
const rootReducer = (state = {}, action) => {
    const activeBookmark = state.bookmark;
    return {
        knowWord: progressBar(state.knowWord, action),
        bookmark: bookmarksContext(state.bookmark, action),

        // merge activeBookmark with original action object
        wordsToRender: wordsToRender(state.wordsToRender, { ...action, activeBookmark }),
        auth: authContext(state.auth, action),
        errors: authError(state.errors, action)
    };
};

const store = configureStore({
    reducer: rootReducer
});
export default store;