import React from 'react';
import styled from "styled-components";
import BookmarksElement from "./BookmarksElement";
import Colors from "../Colors";

const BookmarksBar = () => {
    console.log("BookmarksBar");
    const Wrapper = styled.div`
        display: flex;
        flex-grow: 1;
        background-color: ${Colors.BOOKMARKS_BACKGROUND};
        padding: 0;
        border-radius: 0 10px 0 0;
    `;

    return (
        <Wrapper>
            <BookmarksElement bbTitle={"Examples"} selected={true}/>
            <BookmarksElement bbTitle={"Flash Cards"}/>
            <BookmarksElement bbTitle={"Favorites"}/>
        </Wrapper>
    );
};

export default BookmarksBar;