import { createSlice } from '@reduxjs/toolkit';


const initialState = {};

const authError = createSlice({
    name: 'AuthError',
    initialState,
    reducers: {
        getErrors(state, action) {
            return action.payload;
        },
        clearErrors(){
            return {};
        }
    }
});

export const {
    getErrors,
    clearErrors
} = authError.actions;

export default authError.reducer;