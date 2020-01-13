import {createSlice} from "@reduxjs/toolkit";
import {OBJWORDS as words} from "../../components/words";

const initialState = {
    words: [...words].map(obj => Object.assign(obj, {active: false}))
};

const wordsToRender = createSlice({
    name: 'WordsToRender',
    initialState,
    reducers: {
        addWord(state, action) {
            state.words.push(action.payload);
        },
        removeWord(state, action) {
            const wordName = action.payload;
            const index = state.words.findIndex(obj => obj.wordName === wordName);

            state.words = state.words.filter((obj, i) => {
                return i !== index
            });

        }
    }
});

export const {addWord, setActive, removeWord} = wordsToRender.actions;
export default wordsToRender.reducer;