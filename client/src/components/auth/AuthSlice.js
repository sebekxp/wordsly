import { createSlice } from '@reduxjs/toolkit';
import jwt_decode from "jwt-decode";

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

export const registerUser = (userData) => dispatch => {

    fetch('/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => {
            return res.json();
        })
        .then(res => {
            if (res.status === 400) alert(res.email);
            // else window.location.href = 'http://localhost:3000/login';
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
    const setAuthToken = token => {
        if(token){
            fetchOptions.Authorization = token;
        }else{
            delete fetchOptions.Authorization;
        }
    };
    fetch('/api/users/login', fetchOptions)
        .then(res => {
            return res.json();
        })
        .then(res => {
            // Set token to localStorage
            const { token } = res;
            localStorage.setItem("jwtToken", token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));

        })
        .catch(err => {
            console.log("aDAS",err);
            // dispatch(getErrors(err.response.data));
        });

};