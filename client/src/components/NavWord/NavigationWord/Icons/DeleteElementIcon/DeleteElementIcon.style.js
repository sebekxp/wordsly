import styled from 'styled-components';
import Colors from '../../../../utils/Colors';

export const DeleteElementIconComponent = styled.div`
    display: flex;
    color: ${Colors.DELETE_ELEM_ICON}
    width: 30px;
    height: 30px;
    border-radius: 50%;
    right: 5px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
`;
