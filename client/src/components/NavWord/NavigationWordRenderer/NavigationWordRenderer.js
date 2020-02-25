import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import NavigationWord from '../NavigationWord';
import { bookmarkType as Type } from '../../utils/BookmarkType';
import Colors from '../../utils/Colors';
import { fetchUserWords } from '../../../actions/words/fetchUserWords';
import AddWordsInput from '../AddWordsInput';

const NavigationWordRenderer = ({ words, bookmark, auth, fetchUserWords }) => {
    fetchUserWords({ id: auth.user.id });

    const Container = styled.div`
        padding-left: 3px;
        display: flex;
        width: 275px;
        flex-direction: column;
        height: 436.8px;
        border: 1px solid black;
        box-sizing: border-box;
        background-color: ${Colors.NAVIGATION_WORD_CONTAINER_BACKGROUND};
        overflow: auto;
    `;

    const Wrapper = styled.div`
        width: 275px;
        height: calc(100% - 56px);
    `;

    const renderExamples = () => {
        return words.filter(word => {
            return !word.deleted && word;
        }).map((word) => <NavigationWord name={word.wordName} key={word.wordName} word={word} words={words}/>);
    };

    const renderFavorites = () => {
        return words.filter(word => {
            return word.active && word;
        }).map((word) => <NavigationWord name={word.wordName} key={word.wordName} word={word} words={words}/>);
    };

    const selectBookmark = (value) => {
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
            <Container id="navigation-word-container" className="words">
                {
                    selectBookmark(bookmark)
                }
            </Container>
            <AddWordsInput/>
        </Wrapper>
    );

};

const mapStateToProps = (state) => {
    const { wordsToRender, bookmark, auth } = state;

    return {
        words: wordsToRender.words,
        bookmark,
        auth
    };
};

export default connect(mapStateToProps, { fetchUserWords })(NavigationWordRenderer);
