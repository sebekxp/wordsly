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
        setActive(state, action) {
            const {word, active} = action.payload;
            const index = state.words.findIndex(obj => obj.wordName === word.wordName);
            state.words[index].active = active;
        }
    }
});

export const {addWord, setActive} = wordsToRender.actions;
export default wordsToRender.reducer;