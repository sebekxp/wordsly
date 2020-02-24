import { getErrors } from '../AuthErrorSlice';

export const registerUser = (userData, history, setShowAlert) => dispatch => {

    fetch('/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => {
            let retVal;
            if (res.status === 301) {
                setShowAlert(true);
                setTimeout(() => {
                    history.push('/login');
                }, 3500);
            } else if (res.status === 400)
                retVal = res.json();

            return retVal;
        })
        .then(res => {
            dispatch(getErrors(res));
        })
        .catch(err => {
            console.error('Error during registration', err);
        });


};