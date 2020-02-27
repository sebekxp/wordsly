import React from 'react';
import ProgressBar from '../../ProgressBar';
import BookmarksBar from '../../BookmarkBar';
import WordContentContainer from '../index';
import { Container, Wrapper } from './WordContentWrapper.style';

const WordContentWrapper = () => {
    return (
        <Container>
            <Wrapper>
                <ProgressBar />
                <BookmarksBar />
            </Wrapper>
            <WordContentContainer />
        </Container>
    );
};

export default WordContentWrapper;
