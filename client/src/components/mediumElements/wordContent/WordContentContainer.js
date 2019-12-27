import React from "react";
import styled from "styled-components";
import WordContent from "./WordContent";

const WordContentContainer = (props) => {

    const WordContentContainer = styled.div`
        width: 100%;
        height: 503.9px;
        background-color: pink;
        border-bottom-right-radius: 10px; 
        overflow: auto;
    `;

    return (

        <WordContentContainer id={props.id} className={props.className} >
            <WordContent/>
        </WordContentContainer>
    );
};

export default WordContentContainer;