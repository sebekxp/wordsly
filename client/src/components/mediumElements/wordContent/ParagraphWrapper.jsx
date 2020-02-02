import React from 'react';
import styled from 'styled-components';


const ParagraphWrapper = ({ inputRef, children }) => {
    const targetRef = inputRef;

    const Wrapper = styled.div`
        display: flex;  
    `;

    return (
        <Wrapper ref={targetRef}>
            {children}
        </Wrapper>);
};

export default ParagraphWrapper;