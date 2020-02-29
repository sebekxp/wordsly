import styled from 'styled-components';
import Colors from '../../utils/Colors';

export const Container = styled.div`
    padding-left: 3px;
    display: flex;
    width: 275px;
    flex-direction: column;
    height: 436.8px;
    border: 1px solid black;
    box-sizing: border-box;
    background-color: ${Colors.NAVIGATION_WORD_CONTAINER_BACKGROUND};
    overflow: auto;
`;

export const Wrapper = styled.div`
    width: 275px;
    height: calc(100% - 56px);
`;
