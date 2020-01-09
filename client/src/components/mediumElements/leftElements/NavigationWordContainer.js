import React from "react";
import styled from "styled-components";
import NavigationWord from "./navigationWord/NavigationWord";
import {connect} from "react-redux";


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

    return (
        <Container id={"navigation-word-container"} className={"words"}>
            {
                words.map((word, index) =>
                    <NavigationWord name={word.wordName} key={index}/>)
            }

        </Container>
    );

};

const mapStateToProps = (state) => {
    const {wordsToRender} = state;
    return {words: wordsToRender.words}
};

export default connect(mapStateToProps)(NavigationWordContainer);
