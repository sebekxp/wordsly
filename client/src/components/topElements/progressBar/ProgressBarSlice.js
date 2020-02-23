import { createSlice } from '@reduxjs/toolkit';


const knownWordCounterSlice = createSlice({
    name: 'KnownWordCounter',
    initialState: 0,
    reducers: {
        updateKnowWord(state, action) {
            return action.payload;
        }
    }
});

export const {
    updateKnowWord
} = knownWordCounterSlice.actions;
export default knownWordCounterSlice.reducer;