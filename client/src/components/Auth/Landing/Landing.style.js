import { Button } from 'reactstrap';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 400px;
    justify-content: space-between;
`;

export const P = styled.p`
    font-size: 18px;
    margin: 10px;
    text-align: center;
`;

export const CustomButton = styled(Button)`
    margin-top: 30px;
    width: 150px;
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 500;
`;
