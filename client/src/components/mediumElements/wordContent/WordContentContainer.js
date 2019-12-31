import React, {useContext} from "react";
import styled from "styled-components";
import WordContent from "./WordContent";
import {ShowExampleContext} from "../MediumElementsWrapper";

const WordContentContainer = (props) => {
    const ctx = useContext(ShowExampleContext);

    const WordContentContainer = styled.div`
        width: 100%;
        height: 503.9px;
        background-color: pink;
        border-bottom-right-radius: 10px; 
        overflow: auto;
    `;

    return (
        <WordContentContainer id={props.id} className={props.className}>
            <WordContent obj={ctx.word}/>
        </WordContentContainer>
    );
};

export default WordContentContainer;