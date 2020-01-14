import {createSlice} from "@reduxjs/toolkit";
import {OBJWORDS as words} from "../../components/words";

const initialState = {
    words: [...words].map(obj => Object.assign(obj, {active: false, deleted: false}))
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
        },
        setActive(state, action) {
            const {word, active} = action.payload;
            const index = state.words.findIndex(obj => obj.wordName === word.wordName);
            state.words[index].active = active;
        },
        findByName(state, action) {
            const {word} = action.payload;
            const index = state.words.findIndex(obj => obj.wordName === word.wordName);

            return state.words[index];
        },
        setDeleted(state, action) {
            const {word, deleted} = action.payload;
            const index = state.words.findIndex(obj => obj.wordName === word.wordName);
            state.words[index].deleted = deleted;
        }
    }
});

export const {
    addWord,
    setActive,
    removeWord,
    findByName,
    setDeleted
} = wordsToRender.actions;
export default wordsToRender.reducer;