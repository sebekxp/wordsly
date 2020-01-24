import React from 'react';
import styled from 'styled-components';


const ParagraphWrapper = (props) => {
    const targetRef = props.inputRef;

    const Wrapper = styled.div`
        display: flex;  
    `;

    return (
        <Wrapper ref={targetRef}>
            {props.children}
        </Wrapper>);
};

export default ParagraphWrapper;