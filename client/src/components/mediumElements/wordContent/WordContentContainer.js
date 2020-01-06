import React from "react";
import styled from "styled-components";
import WordContent from "./WordContent";


const WordContentContainer = () => {

    const WordContentContainer = styled.div`
        width: 100%;
        height: 493.9px;
        border-bottom-right-radius: 10px; 
        padding-bottom: 10px;
        overflow: auto;
    `;

    return (
        <WordContentContainer>
            <WordContent/>
        </WordContentContainer>
    );
};

export default WordContentContainer;