import React from 'react';
import styled from 'styled-components';
import WordContentContainer from './wordContent/WordContentContainer';
import LeftElementsWrapper from './leftElements/LeftElementsWrapper';


const MediumElementsWrapper = () => {

    const Wrapper = styled.div`
        display: flex;
        width: 100%;
    `;

    return (
        <Wrapper>
            <LeftElementsWrapper/>
            <WordContentContainer/>
        </Wrapper>
    );
};

export default MediumElementsWrapper;