import { createSlice } from '@reduxjs/toolkit';


const progressBarSlice = createSlice({
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
} = progressBarSlice.actions;
export default progressBarSlice.reducer;