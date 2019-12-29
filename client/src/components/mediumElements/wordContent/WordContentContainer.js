import React from "react";
import styled from "styled-components";
import WordContent from "./WordContent";
import {ShowExampleContext} from "../MediumElementsWrapper";

const WordContentContainer = (props) => {

    const WordContentContainer = styled.div`
        width: 100%;
        height: 503.9px;
        background-color: pink;
        border-bottom-right-radius: 10px; 
        overflow: auto;
    `;

    return (
        <ShowExampleContext.Consumer>
            {ctx =>
                <WordContentContainer id={props.id} className={props.className}>
                    <WordContent obj={ctx.word}/>
                </WordContentContainer>
            }
        </ShowExampleContext.Consumer>
    );
};

export default WordContentContainer;