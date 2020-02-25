import { createSlice } from '@reduxjs/toolkit';


const initialState = {};

const authErrorSlice = createSlice({
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
} = authErrorSlice.actions;

export default authErrorSlice.reducer;