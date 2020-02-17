import jwtDecode from 'jwt-decode';
import { getErrors } from '../AuthErrorSlice';
import setAuthToken from './setAuthToken';
import { setCurrentUser } from '../AuthSlice';

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

            if (!token) {
                dispatch(getErrors(res));
            }

            localStorage.setItem('jwtToken', token);

            // Set token to Auth header
            setAuthToken(token, fetchOptions);

            // Decode token to get user data
            const decoded = jwtDecode(token);

            // Set current user
            dispatch(setCurrentUser(decoded));

        })
        .catch(err => {
            console.error(err);
        });

};