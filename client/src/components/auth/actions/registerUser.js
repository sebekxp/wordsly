import { getErrors } from '../AuthErrorSlice';

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
            dispatch(getErrors(res));
        })
        .catch(err => {
            console.error(err);
        });


};