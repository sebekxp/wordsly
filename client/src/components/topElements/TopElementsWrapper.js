import React from 'react';
import styled from "styled-components";
import ProgressBar from "./progressBar/ProgressBar";
import BookmarksBar from "./bookmarks/BookmarksBar";

const TopElementsWrapper = () => {

    const Wrapper = styled.div`
        display: flex;
    `;

    return (
        <Wrapper>
            <ProgressBar/>
            <BookmarksBar/>
        </Wrapper>
    );
};

export default TopElementsWrapper;