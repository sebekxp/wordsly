import styled, { css } from 'styled-components';
import Colors from '../utils/Colors';

export const Toggle = styled.button`
    width: 255px;
    text-align: center;
    line-height: 56.6px;
    color: ${Colors.DEFAULT_TEXT};
    outline: none;
    border: 0px;
    background-color: ${Colors.BOOKMARKS_ELEMENT_BACKGROUND};

    &:focus {
        background-color: ${Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND};
        outline: 2px auto ${Colors.DEFAULT_VIOLET};
    }

    ${({ selected }) =>
        selected &&
        css`
            background-color: ${Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND};
            border-left: 1.5px solid ${Colors.DEFAULT_VIOLET};
            border-right: 1.5px solid ${Colors.DEFAULT_VIOLET};
        `}
`;
