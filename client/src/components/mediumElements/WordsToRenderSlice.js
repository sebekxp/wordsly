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
        }
    }
});

export const {addWord} = wordsToRender.actions;
export default wordsToRender.reducer;