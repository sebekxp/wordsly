export const fetchWords = () => dispatch => {
    return fetch('/api/words', {
        method: 'GET'
    });
};
