import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Examples from './Examples';
import FlashCards from '../FlashCards';
import Favorites from '../Favorites';
import { bookmarkType as Type } from '../utils/BookmarkType';
import NavigationWordContainer from '../NavWord/NavigationWordRenderer';
import { fetchUserWords } from '../../actions/words/fetchUserWords';
import { fetchWords } from '../../actions/words/fetchWordsCollection';
import {
    setInitialState,
    setNextWordToShow,
    setPrevWordToShow,
    setUserPreferences
} from '../../redux/wordsToRenderReducer';
import {
    IconWrapper,
    Next,
    Prev,
    WordContentContainerComponent,
    Wrapper
} from './WordContent.style';

const WordContent = ({
    bookmark,
    auth,
    fetchWordsAction,
    fetchUserWordsAction,
    setInitialStateAction,
    setUserPreferencesAction,
    setPrevWordToShowAction,
    setNextWordToShowAction
}) => {
    const [render, setRender] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // TODO should throw exceptions to external callers
                const response = await fetchWordsAction();
                if (!response.ok) throw new Error('Error during downloading words');
                const initState = await response.json();

                const res = await fetchUserWordsAction({ id: auth.user.id });
                if (!res.ok) throw Error('Error during downloading user preferences');
                const obj = await res.json();

                setInitialStateAction(initState);
                setUserPreferencesAction(obj);
                setRender(true);
            } catch (err) {
                console.error(err.message);
            }
        };

        fetchData();
    }, [
        auth,
        fetchUserWordsAction,
        fetchWordsAction,
        setInitialStateAction,
        setUserPreferencesAction
    ]);

    const next = () => {
        setNextWordToShowAction();
    };

    const prev = () => {
        setPrevWordToShowAction();
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
        render && (
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
        )
    );
};

WordContent.propTypes = {
    bookmark: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const { bookmark, auth } = state;

    return {
        bookmark,
        auth
    };
};

export default connect(mapStateToProps, {
    setNextWordToShowAction: setNextWordToShow,
    setPrevWordToShowAction: setPrevWordToShow,
    fetchUserWordsAction: fetchUserWords,
    fetchWordsAction: fetchWords,
    setInitialStateAction: setInitialState,
    setUserPreferencesAction: setUserPreferences
})(WordContent);
