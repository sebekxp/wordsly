import styled from 'styled-components';
import { Button, Input, Form } from 'reactstrap';
import { Link } from 'react-router-dom';


export const FormWrapper = styled(Form)`
    display: flex;
    align-items: center;
    flex-direction: column;,
`;

export const InputWrapper = styled(Input)`
    width: 400px;
`;

export const Header = styled.div`
    display: flex;
    align-items: baseline;
    margin: 0 auto;
    margin-bottom: 20px
`;

export const LinkWrapper = styled(Link)`
    font-size: 18px;
    padding: 5px;
`;

export const ButtonWrapper = styled(Button)`
    margin-top: 30px;
    width: 150px;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 500;
`;

export const SPAN = styled.span`
    font-weight: 750;
`;

export const P = styled.p`
    font-size: 20px;
`;