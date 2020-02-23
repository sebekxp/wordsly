import { setInitialState } from '../WordsToRenderSlice';

export function fetchWords() {
    return (dispatch) => {
        fetch('/api/words', {
            method: 'GET'
        }).then(res => {
            return res.json();
        }).then(obj => {
            dispatch(setInitialState(obj));
        }).catch(err => console.error(err));
    };
}