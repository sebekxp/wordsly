import styled from 'styled-components';
import Colors from '../utils/Colors';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    // align-items: baseline:
    flex-grow: 1;
    // width: 100%;
    background-color: ${Colors.EXAMPLES_CONTAINER_BACKGROUND};
    padding: 0;
    margin: 0;
    border-radius: 0 10px 0 0;
    border-bottom: 2px solid ${Colors.DEFAULT_VIOLET};
`;

export const Wrap = styled.div`
    display: flex;
    align-items: baseline;
`;
