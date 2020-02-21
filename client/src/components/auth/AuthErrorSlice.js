import { createSlice } from '@reduxjs/toolkit';


const initialState = {};

const authError = createSlice({
    name: 'AuthError',
    initialState,
    reducers: {
        getErrors(state, action) {
            return action.payload;
        }
    }
});

export const {
    getErrors
} = authError.actions;

export default authError.reducer;