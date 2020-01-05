import {createSlice} from "@reduxjs/toolkit";
import {OBJWORDS as words} from "../../words";


const showExampleContent = createSlice({
    name: 'ShowExampleContent',
    initialState: words[0],
    reducers: {
        setWordContent(state, action) {
            return action.payload;
        }
    }
});

export const {setWordContent} = showExampleContent.actions;
export default showExampleContent.reducer;