import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    favWords: []
};

const favWordsToRender = createSlice({
    name: 'FavWordsToRender',
    initialState,
    reducers: {
        addFavWord(state, action) {
            state.favWords.push(action.payload);
        }
    }
});

export const {addFavWord} = favWordsToRender.actions;
export default favWordsToRender.reducer;