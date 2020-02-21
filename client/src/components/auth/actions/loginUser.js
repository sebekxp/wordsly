import jwtDecode from 'jwt-decode';
import { getErrors } from '../AuthErrorSlice';
import { setCurrentUser } from '../AuthSlice';
import { checkForError } from './checkForError';

export const loginUser = (userData) => dispatch => {
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    };

    fetch('/api/users/login', fetchOptions)
        .then(checkForError)
        .then(res => {
            const { token } = res;
            if (!token) {
                dispatch(getErrors(res));
            }

            localStorage.setItem('jwtToken', token);
            const decoded = jwtDecode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            console.error(err);
        });

};