import styled, { css } from 'styled-components';
import Colors from '../utils/Colors';

export const Toggle = styled.button`
    width: 255px;
    text-align: center;
    height: 68px;
    color: ${Colors.DEFAULT_TEXT};
    outline: none;
    border: 0px;
    background-color: ${Colors.BOOKMARKS_ELEMENT_BACKGROUND};
    border-left: 1.5px solid ${Colors.DEFAULT_VIOLET};

    &:last-of-type {
        border-right: 1.5px solid ${Colors.DEFAULT_VIOLET};
    }

    &:focus {
        background-color: ${Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND};
        outline: 0;
    }

    &:hover {
        background-color: ${Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND};
    }

    ${({ selected }) =>
        selected &&
        css`
            background-color: ${Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND};
        `}
`;
