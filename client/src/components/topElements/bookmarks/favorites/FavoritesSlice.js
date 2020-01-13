import {createSlice} from "@reduxjs/toolkit";
import {OBJWORDS as words} from "../../../words";


const initialState = {
    favWords: []
};

const favWordsToRender = createSlice({
    name: 'FavWordsToRender',
    initialState,
    reducers: {
        addFavWord(state, action) {
            state.favWords.push(action.payload);
        },
        // setActive(state, action) {
        //     const {word, active} = action.payload;
        //     const index = state.words.findIndex(obj => obj.wordName === word.wordName);
        //     state.words[index].active = active;
        // }
    }
});
export const {addFavWord, setActive} = favWordsToRender.actions;
export default favWordsToRender.reducer;