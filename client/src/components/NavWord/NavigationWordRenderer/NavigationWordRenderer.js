import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavigationWord from '../NavigationWord';
import { bookmarkType as Type } from '../../utils/BookmarkType';
import { fetchUserWords } from '../../../actions/words/fetchUserWords';
import AddWordsInput from '../AddWordsInput';
import { Container, Wrapper } from './NavigationWordRenderer.style';
import { authProp, wordProp } from '../../utils/propTypes';

const NavigationWordRenderer = ({ words, bookmark, auth, fetchUserWordsAction }) => {
    // TODO Move fetchUserWords inside useEffect or pass dependency Why dont work indise

    useEffect(() => {
        fetchUserWordsAction({ id: auth.user.id });
    }, [auth, fetchUserWordsAction, words]);

    const renderExamples = () => {
        return words
            .filter(word => {
                return !word.deleted && word;
            })
            .map(word => (
                <NavigationWord
                    name={word.wordName}
                    key={word.wordName}
                    word={word}
                    words={words}
                />
            ));
    };

    const renderFavorites = () => {
        return words
            .filter(word => {
                return word.active && word;
            })
            .map(word => (
                <NavigationWord
                    name={word.wordName}
                    key={word.wordName}
                    word={word}
                    words={words}
                />
            ));
    };

    const selectBookmark = value => {
        let retVal;
        switch (value) {
            case Type.EXAMPLES:
                retVal = renderExamples();
                break;
            case Type.FLASH_CARDS:
                retVal = renderExamples();
                break;
            case Type.FAV:
                retVal = renderFavorites();
                break;
            default:
                retVal = renderExamples();
                break;
        }
        return retVal;
    };

    return (
        <Wrapper>
            <Container>{selectBookmark(bookmark)}</Container>
            <AddWordsInput />
        </Wrapper>
    );
};

NavigationWordRenderer.propsTypes = {
    words: PropTypes.arrayOf(wordProp.isRequired).isRequired,
    bookmark: PropTypes.string.isRequired,
    auth: authProp.isRequired,
    fetchUserWords: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { wordsToRender, bookmark, auth } = state;

    return {
        words: wordsToRender.words,
        bookmark,
        auth
    };
};

export default connect(mapStateToProps, { fetchUserWordsAction: fetchUserWords })(
    NavigationWordRenderer
);
