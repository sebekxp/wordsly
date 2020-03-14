import styled, { css } from 'styled-components';
import { Menu } from 'styled-icons/feather/Menu';
import Colors from '../../../utils/Colors';

export const Dropdown = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    width: 68px;
    height: 68px;
    background-color: ${Colors.BOOKMARKS_ELEMENT_BACKGROUND};
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border: 0;

    &:focus {
        box-shadow: 0 0 0 1px ${Colors.DEFAULT_VIOLET} inset;
        background-color: ${Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND};
        outline: 0;
    }

    &:hover {
        background-color: ${Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND};
    }
`;
export const MenuItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    background-color: ${Colors.EXAMPLES_BACKGROUND};
    border-radius: 5px;
    position: relative;
    right: 140px;
    top: 70px;
`;

export const ThMenuIcon = styled(Menu)`
    width: 35px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${Colors.DEFAULT_TEXT};
`;

export const MenuItem = styled.div`
    font-size: 18px;
    color: ${Colors.DEFAULT_TEXT};
    height: 50px;
    background-color: ${Colors.EXAMPLES_BACKGROUND};
    border-radius: 5px;

    &:hover {
        background-color: ${Colors.NAVIGATION_WORD_BACKGROUND_HOVER};
    }

    &:focus {
        box-shadow: 0 0 0 1px ${Colors.DEFAULT_VIOLET} inset;
        background-color: ${Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND};
        outline: 0;
    }

    ${({ header }) =>
        header &&
        css`
            font-weight: 500;
        `}
`;

export const Line = styled.hr`
    color: ${Colors.DEFAULT_VIOLET};
`;
