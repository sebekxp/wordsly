import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import BookmarksElement from './BookmarksElement';
import Colors from '../../Colors';
import { bookmarkType as Type } from './BookmarkType';
import LogOutComponent from '../../LogOutBtn';


const BookmarksBar = () => {
    const bookmark = useSelector(state => state.bookmark);

    const getActiveBookmark = (text) => {
        return text === bookmark;
    };

    const Wrapper = styled.div`
        display: flex;
        justify-content: space-between;
        flex-grow: 1;
        background-color: ${Colors.BOOKMARKS_BACKGROUND};
        padding: 0;
        border-radius: 0 10px 0 0;
    `;

    const style = {
        display: "flex",
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
            <LogOutComponent/>
        </Wrapper>
    );
};

export default BookmarksBar;