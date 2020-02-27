import styled from 'styled-components';
import { ArrowLeft } from 'styled-icons/feather/ArrowLeft';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 550px;
    margin: 150px auto;
`;

export const BackToHomeWrapper = styled(Link)`
    display: flex;
    font-weight: 600;
    justify-content: center;
    text-transform: uppercase;    
`;

export const BackToHome = styled(ArrowLeft)`
    width: 50px;
    height: 30px;
`;
