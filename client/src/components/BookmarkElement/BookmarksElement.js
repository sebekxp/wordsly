import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setBookmark } from '../../redux/bookmarkReducer';
import { Toggle } from './BookmarksElement.style';

// TODO Make default bookmark selected
const BookmarksElement = ({ bbTitle, selected }) => {
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

BookmarksElement.propTypes = {
    bbTitle: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
};

export default BookmarksElement;
