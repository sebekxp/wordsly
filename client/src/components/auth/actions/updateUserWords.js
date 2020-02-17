export const updateUserWords = (userID, word, option) => dispatch => {

    fetch('/api/users/updateuserwords', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: userID, word, option })
    })
        .then(res => {
            return res.json();
        })
        .catch(err => {
            console.error(err);
        });


};