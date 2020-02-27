import styled, { css } from 'styled-components';
import Colors from '../../utils/Colors';

const selectColor = (name, wordName) => {
    return name === wordName
        ? Colors.NAVIGATION_WORD_BACKGROUND_HOVER
        : Colors.NAVIGATION_WORD_BACKGROUND;
};

export const WordName = styled.div`
    font-size: 20px;
    width: 100%;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 11.8px 11.8px 11.8px 11.8px;

    ${({ name, wordName }) => css`
        background-color: ${selectColor(name, wordName)};
    `}
`;

export const IconWrapper = styled.div`
    display: none;
`;

const getDisplay = shouldBeHide => {
    return shouldBeHide ? 'none' : 'flex';
};

export const NavigationWordComponent = styled.div`
    justify-content: center;
    align-items: center;
    margin-bottom: 3px;

    &:nth-of-type(1) {
        margin-top: 5px;
    }

    p {
        margin: 0;
    }

    &:hover {
        ${IconWrapper} {
            display: flex;
        }

        div {
            background-color: ${Colors.NAVIGATION_WORD_BACKGROUND_HOVER};
        }
    }

    ${({ shouldBeHide }) => css`
        display: ${getDisplay(shouldBeHide)};
    `}
`;
