import styled from 'styled-components';
import { FormGroup, Input } from 'reactstrap';
import Colors from '../utils/Colors';

export const FormGroupWrapper = styled(FormGroup)`
    width: 360px;
    margin: 100px auto;
    color: red;

    &:focus {
        background-color: red;
        color: ${Colors.DEFAULT_TEXT};
    }
`;

export const InputWrapper = styled(Input)`
    font-size: 18px;
    background-color: ${Colors.SEARCH_GREY};
    color: ${Colors.DEFAULT_TEXT};
    outline: none;
    border: 0;
    box-shadow: 0 0 0 0;

    &:focus {
        background-color: ${Colors.SEARCH_GREY};
        color: ${Colors.DEFAULT_TEXT};
        // outline: 2px solid ${Colors.DEFAULT_VIOLET};
        box-shadow: 0 0 0 0;
    }

    &::placeholder {
        color: ${Colors.DEFAULT_TEXT};
    }
`;
