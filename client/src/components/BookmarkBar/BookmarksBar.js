import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import BookmarksElement from '../BookmarkElement';
import Colors from '../utils/Colors';
import { bookmarkType as Type } from '../utils/BookmarkType';
import Logout from '../Buttons/Logout';
import { setBookmark } from '../../redux/bookmarkReducer';


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

    const getActiveBookmark = (text) => {
        return text === bookmark;
    };

    const Wrapper = styled.div`
        display: flex;
        justify-content: space-between;
        flex-grow: 1;
        background-color: ${Colors.PROGRESS_BAR_BLUE};
        padding: 0;
        border-radius: 0 10px 0 0;
    `;

    const style = {
        display: 'flex'
    };

    const example = Type.EXAMPLES;
    const flashCards = Type.FLASH_CARDS;
    const fav = Type.FAV;

    return (
        <Wrapper>
            <div style={style}>
                <BookmarksElement bbTitle={example} selected={getActiveBookmark(example)}/>
                <BookmarksElement bbTitle={flashCards} selected={getActiveBookmark(flashCards)}/>
                <BookmarksElement bbTitle={fav} selected={getActiveBookmark(fav)}/>
            </div>
            <Logout/>
        </Wrapper>
    );
};

const mapStateToProps = (state) => {
    const { bookmark } = state;

    return {
        bookmark
    };
};
export default connect(mapStateToProps, { setBookmark })(BookmarksBar);