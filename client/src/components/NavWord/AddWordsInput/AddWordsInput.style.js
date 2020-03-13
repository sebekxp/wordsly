import styled from 'styled-components';
import Colors from '../../utils/Colors';

export const AddingWordsInputComponent = styled.div`
    display: flex;
    width: 275px;
    height: 57px;
    flex-grow: 1;
    border-bottom-left-radius: 10px;
`;

export const InputWrapper = styled.div`
    display: flex;
    position: fixed;
    justify-content: flex-end;
    align-items: center;
    border-bottom-left-radius: 10px;
    height: 53px;
    width: 346px;
    margin-top: 3px;
`;

export const AddInput = styled.input`
    padding: 0 5px;
    border-bottom-left-radius: 10px;
    font-size: 18px;
    height: 100%;
    width: 100%;
    outline: none;
    border: 1px solid ${Colors.BOOKMARKS_ELEMENT_BACKGROUND};

    font-size: 18px;
    background-color: ${Colors.SEARCH_GREY};
    color: ${Colors.DEFAULT_TEXT};

    &::placeholder {
        color: ${Colors.DEFAULT_TEXT};
    }
    
     &:focus {
        box-shadow::  0px 0px 0px 1px ${Colors.DEFAULT_VIOLET} inset;
    }
`;

export const Add = styled.div`
    position: absolute;
    color: ${Colors.DEFAULT_VIOLET};
    right: 10px;
    width: 35px;
    height: 35px;
`;
