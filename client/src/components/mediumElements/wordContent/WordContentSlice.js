import {createSlice} from "@reduxjs/toolkit";
import {OBJWORDS as words} from "../../words";

const initialState = {
    word: words[0]
};

const showExampleContent = createSlice({
    name: 'ShowExampleContent',
    initialState,
    reducers: {
        setWordContent(state, action) {
            state.word = action.payload;
        },
    }
});

export const {setWordContent, setExpand} = showExampleContent.actions;
export default showExampleContent.reducer;