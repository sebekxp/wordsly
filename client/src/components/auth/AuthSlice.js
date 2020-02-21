import { createSlice } from '@reduxjs/toolkit';

/*eslint import/no-extraneous-dependencies:0*/
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
                user: action.payload,
                loading: !isEmpty(action.payload)
            };
        }
    }
});

export const {
    setCurrentUser
} = authContext.actions;
export default authContext.reducer;