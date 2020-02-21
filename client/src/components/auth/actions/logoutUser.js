import { setCurrentUser } from '../AuthSlice';

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    dispatch(setCurrentUser({}));
    history.push('/login');
};