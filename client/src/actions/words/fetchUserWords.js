export const fetchUserWords = userID => dispatch => {
    const token = localStorage.jwtToken;
    const { id } = userID;

    const fetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
    };

    return fetch(`/api/users/words?${new URLSearchParams({ id })}`, fetchOptions);
};
