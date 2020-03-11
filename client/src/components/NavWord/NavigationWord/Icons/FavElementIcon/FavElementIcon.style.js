import styled, { css } from 'styled-components';
import Colors from '../../../../utils/Colors';

export const FavElemIcon = styled.div`
    top: 0;
    right: 0;
    display: flex;
    color: ${Colors.FAV_ELEM_ICON};
    ${({ position }) => css`
        position: ${position};
    `}
`;
