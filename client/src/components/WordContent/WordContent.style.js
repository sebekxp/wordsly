import styled from 'styled-components';
import { NavigateNext } from 'styled-icons/material/NavigateNext';
import Colors from '../utils/Colors';

export const Next = styled(NavigateNext)`
    width: 50px;
    height: 50px;
    user-select: none;
    color: ${Colors.DEFAULT_VIOLET};
`;

export const Prev = styled(NavigateNext)`
    width: 50px;
    height: 50px;
    transform: rotate(180deg);
    user-select: none;
    color: ${Colors.DEFAULT_VIOLET};
`;

export const IconWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
`;

export const WordContentContainerComponent = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    background-color: ${Colors.EXAMPLES_CONTAINER_BACKGROUND}
    width: 100%;
    height: 498px;
    border-bottom-right-radius: 10px; 
    padding-bottom: 10px;
    overflow: auto;
`;
