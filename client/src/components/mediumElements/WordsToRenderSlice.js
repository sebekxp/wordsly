import {createSlice} from "@reduxjs/toolkit";
import {OBJWORDS as words} from "../../components/words";

const initialState = {
    words: [...words]
};

const wordsToRender = createSlice({
    name: 'ShowExampleContent',
    initialState,
    reducers: {
        addWord(state, action) {
            state.words.push(action.payload);
        },
        setWords(state, action) {
            state.words = action.payload;
        }
    }
});

export const {addWord, setWords} = wordsToRender.actions;
export default wordsToRender.reducer;