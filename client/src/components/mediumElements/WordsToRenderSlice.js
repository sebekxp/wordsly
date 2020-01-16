import {createSlice} from "@reduxjs/toolkit";
import {OBJWORDS as words} from "../../components/words";

const initialState = {
    words: [...words].map(obj =>
        Object.assign(obj, {
            active: false,
            deleted: false,
        })),
    wordToShow: words[0],
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

            // Update wordToShow if Match
            if (state.words[index].wordName === state.wordToShow.wordName)
                state.wordToShow.active = active;
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
        },
        setWordToShow(state, action) {
            state.wordToShow = action.payload;
        },
        setNextWordToShow(state, action) {
            console.log(action.payload);
            const index = state.words.findIndex(obj => obj.wordName === state.wordToShow.wordName);
            if (index + 1 < words.length) {
                state.wordToShow = words[index + 1];
            }
        },
        setPrevWordToShow(state, action) {
            console.log(action.payload);
            const index = state.words.findIndex(obj => obj.wordName === state.wordToShow.wordName);

            if (index - 1 >= 0) {
                state.wordToShow = words[index - 1];
            }
        }
    }
});

export const {
    addWord,
    setActive,
    removeWord,
    findByName,
    setDeleted,
    setWordToShow,
    setNextWordToShow,
    setPrevWordToShow,
} = wordsToRender.actions;
export default wordsToRender.reducer;