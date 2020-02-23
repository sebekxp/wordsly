import { checkForError } from './checkForError';

/* eslint no-unused-vars:0 */
export const updateUserWords = (userID, word, option) => dispatch => {
    const token = localStorage.jwtToken;
    const fetchOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        Authorization: token,
        body: JSON.stringify({ id: userID, word, option })
    };

    fetch('/api/users/words', fetchOptions)
        .then(checkForError)
        .catch(err => {
            console.error(err);
        });
};