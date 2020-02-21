import { checkForError } from '../../auth/actions/checkForError';
import { setUserPreferences } from '../WordsToRenderSlice';

export const fetchUserWords = (userID) => dispatch => {
    const token = localStorage.jwtToken;
    const { id } = userID;
    const fetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        Authorization: token
    };

    fetch(`/api/users/words?${new URLSearchParams({ id })}`, fetchOptions)
        .then(checkForError)
        .then(obj => {
            dispatch(setUserPreferences(obj));
        })
        .catch(err => {
            console.error(err);
        });
};