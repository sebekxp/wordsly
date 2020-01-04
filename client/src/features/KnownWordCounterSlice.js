import {createSlice} from "@reduxjs/toolkit";

const knownWordCounterSlice = createSlice({
    name: 'KnownWordCounter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1
    }
});

export const {incrementKnownWord, decrementKnownWord} = knownWordCounterSlice.actions;
export default knownWordCounterSlice.reducer;