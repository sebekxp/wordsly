import jwtDecode from 'jwt-decode';
import { getErrors } from '../AuthErrorSlice';
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
        .then(res => res.json())
        .then(res => {
            const { token } = res;

            if (!token) {
                dispatch(getErrors(res));
                return;
            }

            localStorage.setItem('jwtToken', token);
            const decoded = jwtDecode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            console.error('Error during login', err);
        });

};