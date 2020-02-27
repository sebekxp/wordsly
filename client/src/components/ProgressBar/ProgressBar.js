import React from 'react';
import { connect } from 'react-redux';
import { Counter, ProgressBarComponent, ProgressBarWrapper, Wrapper } from './ProgressBar.style';

const ProgressBar = ({ words, knowWord }) => {
    return (
        <Wrapper>
            <ProgressBarWrapper>
                <ProgressBarComponent knowWord={knowWord} length={words.length} />
            </ProgressBarWrapper>
            <Counter>
                {knowWord} / {words.length}
            </Counter>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    const { wordsToRender, knowWord } = state;
    return { words: wordsToRender.words, knowWord };
};

export default connect(mapStateToProps)(ProgressBar);
