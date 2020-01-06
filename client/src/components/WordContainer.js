import React from 'react';
import styled from "styled-components";
import TopElementsWrapper from "./topElements/TopElementsWrapper";
import MediumElementsWrapper from "./mediumElements/MediumElementsWrapper";


const Container = styled.div`
    width: 68.75rem;
    height: 35rem;
    padding: 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px;
    margin: auto;
    position: fixed;
    top: 180px;
    left: 0;
    right: 0;
`;


const WordsContainer = () => {

    return (
        <Container>
            <TopElementsWrapper/>
            <MediumElementsWrapper/>
        </Container>
    );
};

export default WordsContainer;