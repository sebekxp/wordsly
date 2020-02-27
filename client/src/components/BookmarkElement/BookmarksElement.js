import React from 'react';
import { useDispatch } from 'react-redux';
import { setBookmark } from '../../redux/bookmarkReducer';
import { Toggle } from './BookmarksElement.style';

const BookmarksElement = ({ bbTitle }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setBookmark(bbTitle));
    };

    return (
        <Toggle onClick={handleClick} color="secondary">
            {bbTitle}
        </Toggle>
    );
};

export default BookmarksElement;
