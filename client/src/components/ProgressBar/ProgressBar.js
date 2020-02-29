import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Counter, ProgressBarComponent, ProgressBarWrapper, Wrapper } from './ProgressBar.style';
import { wordProp } from '../utils/propTypes';

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

ProgressBar.propsTypes = {
    words: PropTypes.arrayOf(wordProp.isRequired).isRequired,
    knowWord: PropTypes.number.isRequired
};

const mapStateToProps = state => {
    const { wordsToRender, knowWord } = state;
    return { words: wordsToRender.words, knowWord };
};

export default connect(mapStateToProps)(ProgressBar);
