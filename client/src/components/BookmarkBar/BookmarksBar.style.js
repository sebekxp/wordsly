import styled from 'styled-components';
import Colors from '../utils/Colors';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    background-color: ${Colors.PROGRESS_BAR_BLUE};
    padding: 0;
    border-radius: 0 10px 0 0;
`;

export const Wrap = styled.div`
    display: flex;
`;
