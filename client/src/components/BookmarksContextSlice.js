import { createSlice } from '@reduxjs/toolkit';
import { bookmarkType as Type } from './topElements/bookmarks/BookmarkType';

const initialState = Type.EXAMPLES;


const bookmarksContext = createSlice({
    name: 'ShowExampleContent',
    initialState,
    reducers: {
        setBookmark(state, action) {
            return action.payload;
        }
    }
});

export const { setBookmark } = bookmarksContext.actions;
export default bookmarksContext.reducer;