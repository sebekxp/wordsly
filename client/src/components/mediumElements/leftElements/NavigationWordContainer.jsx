import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import NavigationWord from './navigationWord/NavigationWord';
import { bookmarkType as Type } from '../../topElements/bookmarks/BookmarkType';
import Colors from '../../Colors';
import { fetchUserWords } from '../actions/fetchUserWords';

const NavigationWordContainer = ({ words, bookmark, auth, fetchUserWords }) => {
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

    const selectBookmark = () => {
        let retVal;
        switch (bookmark) {
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
        <Container id="navigation-word-container" className="words">
            {
                selectBookmark()
            }
        </Container>
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

export default connect(mapStateToProps, { fetchUserWords })(NavigationWordContainer);
