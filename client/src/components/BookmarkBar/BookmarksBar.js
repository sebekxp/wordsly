import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookmarksElement from '../BookmarkElement';
import { bookmarkType as Type } from '../utils/BookmarkType';
import Logout from '../Buttons/Logout';
import { setBookmark } from '../../redux/bookmarkReducer';
import { Wrap, Wrapper } from './BookmarksBar.style';

const BookmarksBar = ({ bookmark, setBookmark }) => {
    const nextBookmark = new Map([
        [Type.EXAMPLES, Type.FLASH_CARDS],
        [Type.FLASH_CARDS, Type.FAV],
        [Type.FAV, Type.EXAMPLES]
    ]);

    const prevBookmark = new Map(Array.from(nextBookmark, a => a.reverse()));

    useEffect(() => {
        const handleUserKeyPress = event => {
            const { keyCode, ctrlKey } = event;

            if (keyCode === 39 && ctrlKey) {
                setBookmark(nextBookmark.get(bookmark));
            } else if (keyCode === 37 && ctrlKey) {
                setBookmark(prevBookmark.get(bookmark));
            }
        };
        window.addEventListener('keydown', handleUserKeyPress);

        return () => {
            window.removeEventListener('keydown', handleUserKeyPress);
        };
    });

    const getActiveBookmark = text => {
        return text === bookmark;
    };

    const example = Type.EXAMPLES;
    const flashCards = Type.FLASH_CARDS;
    const fav = Type.FAV;

    return (
        <Wrapper>
            <Wrap>
                <BookmarksElement bbTitle={example} selected={getActiveBookmark(example)} />
                <BookmarksElement bbTitle={flashCards} selected={getActiveBookmark(flashCards)} />
                <BookmarksElement bbTitle={fav} selected={getActiveBookmark(fav)} />
            </Wrap>
            <Logout />
        </Wrapper>
    );
};

BookmarksBar.propTypes = {
    setBookmark: PropTypes.func.isRequired,
    bookmark: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const { bookmark } = state;

    return {
        bookmark
    };
};
export default connect(mapStateToProps, { setBookmark })(BookmarksBar);
