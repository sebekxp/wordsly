import { checkForError } from '../users/checkForError';
import { setUserPreferences } from '../../redux/wordsToRenderReducer';
import { updateKnowWord } from '../../redux/progressBarReducer';

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

            const {knowWord} = obj;
            dispatch(updateKnowWord(knowWord.length));
        })
        .catch(err => {
            console.error('Error during downloading user preferences', err);
        });
};