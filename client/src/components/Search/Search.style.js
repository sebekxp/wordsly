import styled from 'styled-components';
import { FormGroup, Input } from 'reactstrap';
import Colors from '../utils/Colors';

export const FormGroupWrapper = styled(FormGroup)`
    width: 360px;
    margin-left: 50px;
    color: red;

    &:focus {
        background-color: red;
        color: ${Colors.DEFAULT_TEXT};
    }
`;

export const InputWrapper = styled(Input)`
    font-size: 18px;
    // height: 54px;
    background-color: ${Colors.SEARCH_GREY};
    color: ${Colors.DEFAULT_TEXT};
    outline: none;
    border: 0;
    box-shadow: 0 0 0 0;

    &:focus {
        background-color: ${Colors.SEARCH_GREY};
        color: ${Colors.DEFAULT_TEXT};
        box-shadow: 0 0 0 2px ${Colors.DEFAULT_VIOLET};
    }

    &::placeholder {
        color: ${Colors.DEFAULT_TEXT};
    }
`;
