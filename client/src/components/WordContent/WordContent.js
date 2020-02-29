import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import Examples from './Examples';
import FlashCards from '../FlashCards';
import Favorites from '../Favorites';
import { bookmarkType as Type } from '../utils/BookmarkType';
import { setNextWordToShow, setPrevWordToShow } from '../../redux/wordsToRenderReducer';
import NavigationWordContainer from '../NavWord/NavigationWordRenderer';
import {
    IconWrapper,
    Next,
    Prev,
    WordContentContainerComponent,
    Wrapper
} from './WordContent.style';

const WordContent = ({ bookmark }) => {
    const dispatch = useDispatch();

    const next = () => {
        dispatch(setNextWordToShow());
    };

    const prev = () => {
        dispatch(setPrevWordToShow());
    };
    // TODO UseEffect to custom hook
    useEffect(() => {
        const handleKeyDown = event => {
            const { keyCode, ctrlKey } = event;

            if (keyCode === 39 && !ctrlKey) next();

            if (keyCode === 37 && !ctrlKey) prev();
        };

        window.addEventListener('keyup', handleKeyDown);

        return () => {
            window.removeEventListener('keyup', handleKeyDown);
        };
    });

    const selectBookmark = () => {
        let retVal;
        switch (bookmark) {
            case Type.EXAMPLES:
                retVal = <Examples />;
                break;
            case Type.FLASH_CARDS:
                retVal = <FlashCards />;
                break;
            case Type.FAV:
                retVal = <Favorites />;
                break;
            default:
                retVal = <Examples />;
        }

        return retVal;
    };

    return (
        <Wrapper>
            <NavigationWordContainer />
            <WordContentContainerComponent id="word-content-container">
                <IconWrapper onClick={prev}>
                    <Prev />
                </IconWrapper>
                {selectBookmark()}
                <IconWrapper onClick={next}>
                    <Next />
                </IconWrapper>
            </WordContentContainerComponent>
        </Wrapper>
    );
};

WordContent.propTypes = {
    bookmark: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const { bookmark } = state;

    return {
        bookmark
    };
};

export default connect(mapStateToProps)(WordContent);
