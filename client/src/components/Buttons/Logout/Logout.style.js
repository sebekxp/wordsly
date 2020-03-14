import styled from 'styled-components';
import { Menu } from 'styled-icons/feather/Menu';
import { DropdownToggle } from 'reactstrap';
import Colors from '../../utils/Colors';

export const ThMenuIcon = styled(Menu)`
    width: 35px;
`;

export const Toggle = styled(DropdownToggle)`
    height: 100%;
    color: white
    background-color: ${Colors.BOOKMARKS_ELEMENT_BACKGROUND};
    outline: none;
    border: 0;
    box-shadow: 0 0 0 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;

    &:hover {
        background-color: ${Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND};
    }

    &:focus {
        box-shadow: 0 0 0 1px ${Colors.DEFAULT_VIOLET};
    }
`;
