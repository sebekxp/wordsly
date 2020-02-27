import styled from 'styled-components';
import Colors from '../../utils/Colors';

export const Container = styled.div`
    width: 68.75rem;
    height: 35rem;
    padding: 0;
    border-radius: 10px;
    box-shadow: ${Colors.BOX_SHADOW}
    margin: auto;
    position: fixed;
    top: 180px;
    left: 0;
    right: 0;
`;
export const Wrapper = styled.div`
    display: flex;
`;
