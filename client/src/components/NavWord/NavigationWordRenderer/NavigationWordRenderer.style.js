import { FixedSizeList as List } from 'react-window';
import styled from 'styled-components';
import Colors from '../../utils/Colors';

export const Container = styled.div`
    padding-top: 3px;
    padding-left: 3px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    box-sizing: border-box;
    background-color: ${Colors.NAVIGATION_WORD_CONTAINER_BACKGROUND};
    overflow: hidden;
`;
export const ScrolledList = styled(List)`
    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 2.5px grey;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        height: 40px;
        background: ${Colors.DEFAULT_VIOLET};
        border-radius: 10px;
    }
`;
