import React, {useContext} from "react";
import styled from "styled-components";
import WordContent from "./WordContent";
import {ShowExampleContext} from "../MediumElementsWrapper";

const WordContentContainer = () => {
    const ctx = useContext(ShowExampleContext);

    const WordContentContainer = styled.div`
        width: 100%;
        height: 503.9px;
        border-bottom-right-radius: 10px; 
        overflow: auto;
    `;

    return (
        <WordContentContainer>
            <WordContent obj={ctx.word}/>
        </WordContentContainer>
    );
};

export default WordContentContainer;