import React from "react";
import styled from "styled-components";
import Examples from "./Examples";
import {connect} from "react-redux";
import FlashCards from "../../topElements/bookmarks/flashCards/FlashCard";
import Favorites from "../../topElements/bookmarks/favorites/Favorites";
import {bookmarkType as Type} from "../../topElements/bookmarks/BookmarkType";


const WordContentContainer = (props) => {
    const WordContentContainer = styled.div`
        width: 100%;
        height: 493.9px;
        border-bottom-right-radius: 10px; 
        padding-bottom: 10px;
        overflow: auto;
    `;

    const selectBookmark = () => {
        switch (props.bookmark) {
            case Type.EXAMPLES:
                return <Examples/>;
            case Type.FLASH_CARDS:
                return <FlashCards/>;
            case Type.FAV:
                return <Favorites/>;
            default:
                return
        }
    };

    return (
        <WordContentContainer>
            {selectBookmark()}
        </WordContentContainer>
    );
};

const mapStateToProps = (state) => {
    const {bookmark} = state;
    return {bookmark: bookmark}
};

export default connect(mapStateToProps)(WordContentContainer);
