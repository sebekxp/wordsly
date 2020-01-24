import React from 'react';
import styled from 'styled-components';
import TopElementsWrapper from './topElements/TopElementsWrapper';
import MediumElementsWrapper from './mediumElements/MediumElementsWrapper';
import Colors from './Colors';


const Container = styled.div`
    width: 68.75rem;
    height: 35rem;
    padding: 0;
    border-radius: 10px;
    box-shadow: ${Colors.BOX_SHADOW}
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