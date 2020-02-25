import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Colors from '../utils/Colors';


const Wrapper = styled.div`
    width: 275px;
    display: flex;
    padding: 5px;
    background-color: ${Colors.DEFAULT_GREY};
    color: ${Colors.PROGRESS_BAR_TEXT};
    flex-direction: column;
    text-align: center;
    border-radius: 10px 0 0 0;
`;

const ProgressBarWrapper = styled.div`
    border: 1.5px solid black;
    padding: 0.1px 0px;
    border-radius: 20px;
    margin: 5px 10px;
`;

const Counter = styled.div`
    font-size: 12.5px;
    font-weight: 600;
    cursor: text;
    padding: 5px 0;
`;

const ProgressBar = ({ words, knowWord }) => {

    const getCurrentProgress = (knownWords) => {
        const numOfKnownWords = knownWords;
        const percentageValue = 100 / words.length;

        return numOfKnownWords * percentageValue;
    };

    const ProgressBarComponent = styled.div`
        width: ${getCurrentProgress(knowWord)}%;
        height: 15px;
        background-color: ${Colors.PROGRESS_BAR_BLUE};
        border-radius: 8px;
        transition: width 1.5s;
    `;

    return (
        (<Wrapper>
            <ProgressBarWrapper>
                <ProgressBarComponent/>
            </ProgressBarWrapper>
            <Counter>{knowWord} / {words.length}</Counter>
        </Wrapper>)
    );
};

const mapStateToProps = (state) => {
    const { wordsToRender, knowWord } = state;
    return { words: wordsToRender.words, knowWord };
};

export default connect(mapStateToProps)(ProgressBar);