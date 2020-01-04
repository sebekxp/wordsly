import React from "react";
import styled from "styled-components";
import NavigationWord from "./navigationWord/NavigationWord";
import {OBJWORDS as words} from "../../words";


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
        <Container id={props.id} className={props.className}>
            {
                words.map((word, index) =>
                    <NavigationWord name={word.wordName} key={index}/>)
            }
        </Container>
    );

};

export default NavigationWordContainer;