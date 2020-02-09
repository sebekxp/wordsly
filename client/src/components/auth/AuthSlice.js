import { createSlice } from '@reduxjs/toolkit';
import { setInitialState } from '../mediumElements/WordsToRenderSlice';

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
        },
        getErrors(state, action) {
            return action.payload;
        }
    }
});

export const {
    setCurrentUser,
    userLoading,
    getErrors
} = authContext.actions;
export default authContext.reducer;

export const registerUser = (userData, history) => dispatch => {
    console.log(JSON.stringify(userData));
    fetch('/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => {
            history.push('/login');
        })
        .catch(err => {
            // dispatch(getErrors(err.response.data));
        });

};

