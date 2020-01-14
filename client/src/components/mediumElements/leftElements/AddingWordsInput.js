import React, {useState} from "react";
import styled from 'styled-components';
import {AddCircleOutline} from 'styled-icons/material/AddCircleOutline';
import {AddCircle} from 'styled-icons/material/AddCircle';
import {useDispatch} from "react-redux";
import {addWord} from "../WordsToRenderSlice";
import Colors from "../../../utils/Colors";

const AddingWordsInput = () => {
    const [hover, setHover] = useState(false);
    const dispatch = useDispatch();
    const target = React.createRef();

    const AddingWordsInput = styled.div`
        display: flex;
        width: 275px;
        height: 57px;
        flex-grow: 1;
        border-bottom-left-radius: 10px;
       
    `;

    const InputWrapper = styled.div`
        display: flex;
        position: fixed;
        justify-content: flex-end;
        align-items: center;
        border-bottom-left-radius: 10px;
        height: 57px;
        width: 275px;
        margin: auto;
    `;

    const AddInput = styled.input`
        padding: 0 5px;
        border-bottom-left-radius: 10px;
        font-size: 18px;
        height: 100%;
        width: 100%;
        outline: none;
        border: 1px solid ${Colors.BOOKMARKS_ELEMENT_BACKGROUND};

    `;


    const onMouseEnterHandler = () => {
        setHover(true);
    };

    const onMouseLeaveHandler = () => {
        setHover(false);
    };

    const selectIcon = () => {
        return !hover ? AddCircleOutline : AddCircle
    };


    const Add = styled(selectIcon())`
        position: absolute;
        color: ${Colors.GREEN_CIRCLE};
        right: 10px;
        width: 35px;
        height: 35px;
        
    `;

    const createNavWord = (wordName, wordTranslate) => {
        return {
            wordName: wordName,
            wordTranslate: wordTranslate,
            examples: [
                "a woman of her ability " + wordName + " ",
                " " + wordName + " he has an ability for figures",
                "a low ability student " + wordName + " ",
                "You possess the ability to back your strong imagination with will and action. " + wordName + " ",
            ]
        }
    };

    const getInputValue = () => {
        return target.current.value.trim();
    };

    const createAndAddWordToRepo = () => {
        const inputValue = getInputValue();
        if (inputValue.length === 0 || inputValue.length > 11) {
            alert("The name is too short or too long to be used as a navigation word.");
            return;
        }
        const nav = createNavWord(inputValue, inputValue);
        dispatch(addWord(nav));
    };

    const handleEnterPress = (e) => {
        if (e.which !== 13)
            return;
        createAndAddWordToRepo();
    };

    const handleButtonPress = () => {
        createAndAddWordToRepo();
    };

    return (
        <AddingWordsInput>
            <InputWrapper>
                <AddInput type="text" name="" id="add-word" placeholder={"Add word"} ref={target}
                          onKeyPress={e => handleEnterPress(e)}/>
                <Add onClick={handleButtonPress}
                     onMouseEnter={onMouseEnterHandler}
                     onMouseLeave={onMouseLeaveHandler}/>
            </InputWrapper>
        </AddingWordsInput>
    );

};
export default AddingWordsInput;