import { createSlice } from '@reduxjs/toolkit';

const isEmpty = require('is-empty');

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
};

const authContext = createSlice({
    name: 'AuthContext',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        },
        userLoading(state) {
            return {
                ...state,
                loading: true
            };
        }
    }
});

export const {
    setCurrentUser,
    userLoading
} = authContext.actions;
export default authContext.reducer;