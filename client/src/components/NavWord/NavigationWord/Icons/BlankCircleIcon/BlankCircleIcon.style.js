import styled, { css } from 'styled-components';
import Colors from '../../../../utils/Colors';

const setColor = hover => {
    return hover ? Colors.NAVIGATION_WORD_BACKGROUND_HOVER : Colors.NAVIGATION_WORD_BACKGROUND;
};

// TODO color to utils
export const GreenCircleIcon = styled.div`
    color: #28a745;
    padding: 12px 12px;
    width: 53.59px;
    height: 53.9px;
    margin-right: 3px;
    border-radius: 5px;

    ${({ hover }) =>
        css`
            background-color: ${setColor(hover)};
        `}
`;
