import React from 'react';
import styled from "styled-components";
import BookmarksElement from "./BookmarksElement";
import Colors from "../Colors";
import {useSelector} from "react-redux";


const BookmarksBar = () => {
    const bookmark = useSelector(state => state.bookmark);

    const getActiveBookmark = (text) => {
        return text === bookmark;
    };

    const Wrapper = styled.div`
        display: flex;
        flex-grow: 1;
        background-color: ${Colors.BOOKMARKS_BACKGROUND};
        padding: 0;
        border-radius: 0 10px 0 0;
    `;

    const example = "Examples";
    const flashCards = "Flash Cards";
    const fav = "Favorites";

    return (
        <Wrapper>
            <BookmarksElement bbTitle={example} selected={getActiveBookmark(example)}/>
            <BookmarksElement bbTitle={flashCards} selected={getActiveBookmark(flashCards)}/>
            <BookmarksElement bbTitle={fav} selected={getActiveBookmark(fav)}/>
        </Wrapper>
    );
};

export default BookmarksBar;