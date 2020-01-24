import React, { useEffect } from 'react';
import styled from 'styled-components';
import Examples from './Examples';
import { connect, useDispatch } from 'react-redux';
import FlashCards from '../../topElements/bookmarks/flashCards/FlashCard';
import Favorites from '../../topElements/bookmarks/favorites/Favorites';
import { bookmarkType as Type } from '../../topElements/bookmarks/BookmarkType';
import { NavigateNext } from 'styled-icons/material/NavigateNext';
import { setNextWordToShow, setPrevWordToShow } from '../WordsToRenderSlice';
import Colors from '../../Colors';

const WordContentContainer = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        document.addEventListener('keyup', handleKeyDown);
    }, []);


    const next = () => {
        dispatch(setNextWordToShow());
    };

    const prev = () => {
        dispatch(setPrevWordToShow());
    };

    const handleKeyDown = (e) => {
        if (e.which === 39)
            next();
        if (e.which === 37)
            prev();

    };

    const WordContentContainer = styled.div`
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
        background-color: ${Colors.EXAMPLES_CONTAINER_BACKGROUND}
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
                return;
        }
    };

    const Next = styled(NavigateNext)`
        width: 50px;
        height: 50px;
        user-select: none;
    `;

    const Prev = styled(NavigateNext)`
        width: 50px;
        height: 50px;
        transform: rotate(180deg);
        user-select: none;
    `;

    const IconWrapper = styled.div`
        height: 100%;
        display: flex;
        align-items: center; 
    `;

    return (
        <WordContentContainer>
            <IconWrapper onClick={prev}>
                <Prev/>
            </IconWrapper>
            {selectBookmark()}
            <IconWrapper onClick={next}>
                <Next/>
            </IconWrapper>
        </WordContentContainer>
    );
};

const mapStateToProps = (state) => {
    const { bookmark } = state;
    return {
        bookmark: bookmark
    };
};

export default connect(mapStateToProps)(WordContentContainer);
