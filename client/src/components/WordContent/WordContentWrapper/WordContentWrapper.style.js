import styled from 'styled-components';
import Colors from '../../utils/Colors';

export const Container = styled.div`
    width: 90%;
    height: 90%;
    padding: 0;
    border-radius: 10px;
    box-shadow: ${Colors.BOX_SHADOW}
    background-color: ${Colors.EXAMPLES_CONTAINER_BACKGROUND}
    // margin: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); 
`;
export const Wrapper = styled.div`
    display: flex;
`;
