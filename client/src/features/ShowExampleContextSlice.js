import {createSlice} from "@reduxjs/toolkit";
import {OBJWORDS as words} from "../../src/components/words";

const showExampleContentSlice = createSlice({
    name: 'ShowExampleContent',
    initialState: words[0],
    reducers: {
        setWord(state, action) {
            state = action.payload;
        }
    }
});

export default showExampleContentSlice.reducer;