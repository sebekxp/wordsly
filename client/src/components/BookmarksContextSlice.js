import {createSlice} from "@reduxjs/toolkit";

const initialState ="Examples";


const bookmarksContext = createSlice({
    name: 'ShowExampleContent',
    initialState,
    reducers: {
        setBookmark(state, action) {
            return action.payload;
        }
    }
});

export const {setBookmark} = bookmarksContext.actions;
export default bookmarksContext.reducer;