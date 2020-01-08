import React from "react";
import styled from "styled-components";
import NavigationWord from "./navigationWord/NavigationWord";
import {OBJWORDS as words} from "../../words";
import uuid from 'uuid';


const NavigationWordContainer = (props) => {

    const Container = styled.div`
        display: flex;
        width: 275px;
        flex-direction: column;
        height: 446.8px;
        border: 1px solid black;
        box-sizing: border-box;
        background-color: #f1f1f1;
        overflow: auto;
    `;

    return (
        <Container id={props.id} className={"words"}>
            {
                words.map((word) =>
                    <NavigationWord name={word.wordName} key={uuid()}/>)
            }
        </Container>
    );

};

export default NavigationWordContainer;