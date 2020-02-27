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
    height: 57px;
    width: 275px;
    margin: auto;
`;

export const AddInput = styled.input`
    padding: 0 5px;
    border-bottom-left-radius: 10px;
    font-size: 18px;
    height: 100%;
    width: 100%;
    outline: none;
    border: 1px solid ${Colors.BOOKMARKS_ELEMENT_BACKGROUND};
`;

export const Add = styled.div`
    position: absolute;
    color: ${Colors.GREEN_CIRCLE};
    right: 10px;
    width: 35px;
    height: 35px;
`;
