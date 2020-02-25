import React, { useEffect } from 'react';
import styled from 'styled-components';
import { NavigateNext } from 'styled-icons/material/NavigateNext';
import { connect, useDispatch } from 'react-redux';
import Examples from './Examples';
import FlashCards from '../FlashCards';
import Favorites from '../Favorites';
import { bookmarkType as Type } from '../utils/BookmarkType';
import { setNextWordToShow, setPrevWordToShow } from '../../redux/wordsToRenderReducer';
import Colors from '../utils/Colors';
import NavigationWordContainer from '../NavWord/NavigationWordRenderer';

const WordContent = (props) => {
    const dispatch = useDispatch();

    const next = () => {
        dispatch(setNextWordToShow());
    };

    const prev = () => {
        dispatch(setPrevWordToShow());
    };


    useEffect(() => {

        const handleKeyDown = event => {
            const { keyCode, ctrlKey } = event;

            if (keyCode === 39 && !ctrlKey)
                next();

            if (keyCode === 37 && !ctrlKey)
                prev();
        };

        window.addEventListener('keyup', handleKeyDown);

        return () => {
            window.removeEventListener('keyup', handleKeyDown);
        };
    });

    const WordContentContainerComponent = styled.div`
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
        let bookmark;
        switch (props.bookmark) {
            case Type.EXAMPLES:
                bookmark = <Examples/>;
                break;
            case Type.FLASH_CARDS:
                bookmark = <FlashCards/>;
                break;
            case Type.FAV:
                bookmark = <Favorites/>;
                break;
            default:
                bookmark = <Examples/>;
        }

        return bookmark;
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

    const Wrapper = styled.div`
        display: flex;
        width: 100%;
    `;
    return (
        <Wrapper>
            <NavigationWordContainer/>
            <WordContentContainerComponent id={'word-content-container'}>
                <IconWrapper onClick={prev}>
                    <Prev/>
                </IconWrapper>
                {selectBookmark()}
                <IconWrapper onClick={next}>
                    <Next/>
                </IconWrapper>
            </WordContentContainerComponent>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    const { bookmark } = state;

    return {
        bookmark
    };
};

export default connect(mapStateToProps)(WordContent);
