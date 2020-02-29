import styled, { css } from 'styled-components';
import { Button } from 'reactstrap';
import Colors from '../utils/Colors';

export const Toggle = styled(Button)`
    width: 135px;
    text-align: center;
    line-height: 56.6px;
    color: white;

    background-color: ${Colors.BOOKMARKS_ELEMENT_BACKGROUND};

    &:focus {
        background-color: ${Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND};
    }

    ${({ selected }) =>
        selected &&
        css`
            background-color: ${Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND};
        `}
`;
