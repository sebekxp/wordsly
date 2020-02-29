import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setBookmark } from '../../redux/bookmarkReducer';
import { Toggle } from './BookmarksElement.style';

const BookmarksElement = ({ bbTitle, selected, setBookmarkAction }) => {
    const handleClick = () => {
        setBookmarkAction(bbTitle);
    };

    return (
        <Toggle onClick={handleClick} color="secondary" selected={selected}>
            {bbTitle}
        </Toggle>
    );
};

BookmarksElement.propTypes = {
    bbTitle: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
};

export default connect(null, { setBookmarkAction: setBookmark })(BookmarksElement);
