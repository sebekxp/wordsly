import React from 'react';
import styled from 'styled-components';
import NavigationWordContainer from "./NavigationWordContainer";
import AddingWordsInput from "./AddingWordsInput";

const LeftElementsWrapper = () => {

    const Wrapper = styled.div`
        width: 275px;
        height: calc(100% - 56px);
    `;

    return (
        <Wrapper>
            <NavigationWordContainer/>
            <AddingWordsInput/>
        </Wrapper>
    );
};

export default LeftElementsWrapper;