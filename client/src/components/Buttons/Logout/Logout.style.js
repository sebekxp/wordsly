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

    &:focus {
        background-color: ${Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND};
    }
`;
