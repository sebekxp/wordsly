import styled, { css } from 'styled-components';
import { Menu } from 'styled-icons/feather/Menu';
import { DropdownToggle } from 'reactstrap';
import Colors from '../../utils/Colors';

export const ThMenuIcon = styled(Menu)`
        width: 35px;
    `;

const getColor = (isSelected) => {

    return isSelected ?
        Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND :
        Colors.BOOKMARKS_ELEMENT_BACKGROUND;
};

export const Toggle = styled(DropdownToggle)`
    height: 100%;
    color: white;
    
    ${({ isSelected }) =>
    css`
        background-color: ${getColor(isSelected)};
    `}
`;

