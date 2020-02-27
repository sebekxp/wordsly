import styled, { css } from 'styled-components';
import Colors from '../utils/Colors';

const getCurrentProgress = (knownWords, length) => {
    const numOfKnownWords = knownWords;
    const percentageValue = 100 / length;

    return numOfKnownWords * percentageValue;
};

export const ProgressBarComponent = styled.div`
    height: 15px;
    background-color: ${Colors.PROGRESS_BAR_BLUE};
    border-radius: 8px;
    transition: width 1.5s;

    ${({ knowWord, length }) =>
        css`
            width: ${getCurrentProgress(knowWord, length)}%;
        `}
`;

export const Wrapper = styled.div`
    width: 275px;
    display: flex;
    padding: 5px;
    background-color: ${Colors.DEFAULT_GREY};
    color: ${Colors.PROGRESS_BAR_TEXT};
    flex-direction: column;
    text-align: center;
    border-radius: 10px 0 0 0;
`;

export const ProgressBarWrapper = styled.div`
    border: 1.5px solid black;
    padding: 0.1px 0px;
    border-radius: 20px;
    margin: 5px 10px;
`;

export const Counter = styled.div`
    font-size: 12.5px;
    font-weight: 600;
    cursor: text;
    padding: 5px 0;
`;
