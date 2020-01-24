import knownWordCounterReducer from '../components/topElements/progressBar/ProgressBarSlice';
import wordsToRender from '../components/mediumElements/WordsToRenderSlice';
import bookmarksContext from '../components/BookmarksContextSlice';

export const rootReducer = (state = {}, action) => {
    const activeBookmark = state.bookmark;
    return {
        knowWord: knownWordCounterReducer(state.knowWord, action),
        bookmark: bookmarksContext(state.bookmark, action),
        // merge activeBookmark with original action object
        wordsToRender: wordsToRender(state.wordsToRender, { ...action, activeBookmark: activeBookmark })
    };
};