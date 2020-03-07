import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavigationWord from '../NavigationWord';
import { bookmarkType as Type } from '../../utils/BookmarkType';
import AddWordsInput from '../AddWordsInput';
import { Container, Wrapper } from './NavigationWordRenderer.style';
import { authProp, wordProp } from '../../utils/propTypes';

const NavigationWordRenderer = ({ words, bookmark }) => {
    const renderExamples = () => {
        return words.map(word => <NavigationWord key={word._id} word={word} />);
    };

    const renderFavorites = () => {
        return words
            .filter(word => {
                return word.active && word;
            })
            .map(word => <NavigationWord key={word._id} word={word} />);
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
    const { wordsToRender, bookmark } = state;

    return {
        words: wordsToRender.words,
        bookmark,
        rendered: wordsToRender.rendered
    };
};

export default connect(mapStateToProps, null)(NavigationWordRenderer);
