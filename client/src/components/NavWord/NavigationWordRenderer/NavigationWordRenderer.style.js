import styled from 'styled-components';
import Colors from '../../utils/Colors';

export const listHeight = 437;

export const Container = styled.div`
    padding-top: 3px;
    padding-left: 3px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    box-sizing: border-box;
    background-color: ${Colors.NAVIGATION_WORD_CONTAINER_BACKGROUND};
    overflow: auto;
`;
