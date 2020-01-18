import React from "react";
import styled from "styled-components";
import NavigationWord from "./navigationWord/NavigationWord";
import {connect} from "react-redux";
import {bookmarkType as Type} from "../../topElements/bookmarks/BookmarkType";

const NavigationWordContainer = (props) => {
    const words = props.words;

    const Container = styled.div`
        display: flex;
        width: 275px;
        flex-direction: column;
        height: 436.8px;
        border: 1px solid black;
        box-sizing: border-box;
        background-color: #f1f1f1;
        overflow: auto;
    `;

    const selectBookmark = () => {
        switch (props.bookmark) {
            case Type.EXAMPLES:
                return renderExamples();
            case Type.FLASH_CARDS:
                return renderExamples();
            case Type.FAV:
                return renderFavorites();
            default:
                return
        }
    };

    const renderExamples = () => {
        return words.filter(word => {
            return !word.deleted ? word : null
        }).map((word, index) => <NavigationWord name={word.wordName} key={index} word={word}/>)
    };

    const renderFavorites = () => {
        return words.filter(word => {
            return word.active ? word : null
        }).map((word, index) => <NavigationWord name={word.wordName} key={index}  word={word}/>)
    };

    return (
        <Container id={"navigation-word-container"} className={"words"}>
            {
                selectBookmark()
            }
        </Container>
    );

};

const mapStateToProps = (state) => {
    const {wordsToRender} = state;
    const {bookmark} = state;

    return {
        words: wordsToRender.words,
        bookmark: bookmark
    }
};

export default connect(mapStateToProps)(NavigationWordContainer);
