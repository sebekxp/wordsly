import { setCurrentUser } from '../AuthSlice';

export const logoutUser = (history) => dispatch => {
    // Remove token from local storage
    localStorage.removeItem('jwtToken');

    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));

    history.push('/login');
};