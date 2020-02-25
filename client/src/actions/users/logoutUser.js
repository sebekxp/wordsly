import { setCurrentUser } from '../../redux/authReducer';

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    dispatch(setCurrentUser({}));
    history.push('/login');
};