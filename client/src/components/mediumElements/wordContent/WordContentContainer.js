import React, {useEffect} from "react";
import styled from "styled-components";
import Examples from "./Examples";
import {connect} from "react-redux";
import FlashCards from "../../topElements/bookmarks/flashCards/FlashCard";
import Favorites from "../../topElements/bookmarks/favorites/Favorites";
import {bookmarkType as Type} from "../../topElements/bookmarks/BookmarkType";
import {NavigateNext} from 'styled-icons/material/NavigateNext'

const WordContentContainer = (props) => {

    const handleKeyDown = (e) => {
        if (e.which === 39)
            console.log("Next");
        if (e.which === 37)
            console.log("Prev");
    };

    useEffect(()=>{
        document.addEventListener("keydown", handleKeyDown);
    });

    const WordContentContainer = styled.div`
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
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

    const Next = styled(NavigateNext)`
        width: 50px;
        height: 50px;
    `;

    const Prev = styled(NavigateNext)`
        width: 50px;
        height: 50px;
        transform: rotate(180deg);
    `;

    const IconWrapper = styled.div`
        height: 100%;
        display: flex;
        align-items: center; 
    `;

    const handleClick = () => {
        console.log("elo");
    };



    return (
        <WordContentContainer onKeyPress={e => handleKeyDown(e)}>
            <IconWrapper onClick={handleClick}>
                <Prev/>
            </IconWrapper>
            {selectBookmark()}
            <IconWrapper onClick={handleClick}>
                <Next/>
            </IconWrapper>
        </WordContentContainer>
    );
};

const mapStateToProps = (state) => {
    const {bookmark} = state;
    return {bookmark: bookmark}
};

export default connect(mapStateToProps)(WordContentContainer);
