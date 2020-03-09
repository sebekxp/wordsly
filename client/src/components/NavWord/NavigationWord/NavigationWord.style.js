import styled, { css } from 'styled-components';
import Colors from '../../utils/Colors';
import { Wrapper } from './Icons/BlankCircleIcon/BlankCircleIcon.style';

const selectColor = (name, wordName) => {
    return name === wordName
        ? Colors.NAVIGATION_WORD_BACKGROUND_HOVER
        : Colors.NAVIGATION_WORD_BACKGROUND;
};

export const IconWrapper = styled.div`
    display: none;
`;

export const WordName = styled.div`
    font-size: 20px;
    height: 53px;
    width: 100%;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 12px 12px;
    background-color: ${Colors.NAVIGATION_WORD_BACKGROUND};
`;

export const NavigationWordComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3px;

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

    ${({ name, wordName }) => css`
        ${WordName} {
            background-color: ${selectColor(name, wordName)};
        }

        ${Wrapper} {
            background-color: ${selectColor(name, wordName)};
        }
    `}
`;
