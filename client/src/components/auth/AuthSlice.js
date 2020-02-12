import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import setAuthToken from './setAuthToken';

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
    }
});

export const {
    setCurrentUser,
    userLoading,
} = authContext.actions;
export default authContext.reducer;

export const registerUser = (userData, history) => dispatch => {

    fetch('/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => {
            if (res.status === 301)
                history.push('/login');
            else if (res.status === 400)
                return res.json();
        })
        .then(res => {
            alert(res.email);
        })
        .catch(err => {
            console.log(err);
            // dispatch(getErrors(err.response.data));
        });

};

export const loginUser = (userData) => dispatch => {
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    };

    fetch('/api/users/login', fetchOptions)
        .then(res => {
            return res.json();
        })
        .then(res => {
            // Set token to localStorage
            const { token } = res;
            localStorage.setItem('jwtToken', token);

            // Set token to Auth header
            setAuthToken(token, fetchOptions);

            // Decode token to get user data
            const decoded = jwtDecode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));

        })
        .catch(err => {
            console.log(err);
            // dispatch(getErrors(err.response.data));
        });

};