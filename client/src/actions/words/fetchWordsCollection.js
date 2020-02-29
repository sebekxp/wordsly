import { setInitialState } from '../../redux/wordsToRenderReducer';

export function fetchWords() {
    return dispatch => {
        fetch('/api/words', {
            method: 'GET'
        })
            .then(res => {
                return res.json();
            })
            .then(obj => {
                dispatch(setInitialState(obj));
            })
            .catch(err => console.error('Error during downloading words', err));
    };
}
