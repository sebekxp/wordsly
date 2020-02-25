import { createSlice } from '@reduxjs/toolkit';
import { bookmarkType as Type } from '../components/utils/BookmarkType';

const initialState = Type.EXAMPLES;


const bookmarksSlice = createSlice({
    name: 'ShowExampleContent',
    initialState,
    reducers: {
        setBookmark(state, action) {
            return action.payload;
        }
    }
});

export const { setBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;