import React, { useState } from 'react';
import { AddCircleOutline } from 'styled-icons/material/AddCircleOutline';
import { AddCircle } from 'styled-icons/material/AddCircle';
// noinspection ES6CheckImport
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addWord } from '../../../redux/wordsToRenderReducer';
import { Add, AddingWordsInputComponent, AddInput, InputWrapper } from './AddWordsInput.style';
import AddWordModal from '../../Modals/AddWordModal/AddWordModal';

const AddWordsInput = ({ addWordAction }) => {
    const [hover, setHover] = useState(false);
    const target = React.createRef();
    const [isOpen, setOpen] = useState(false);

    const onMouseEnterHandler = () => {
        setHover(true);
    };

    const onMouseLeaveHandler = () => {
        setHover(false);
    };

    const selectIcon = () => {
        return !hover ? AddCircleOutline : AddCircle;
    };

    const createNavWord = (wordName, wordTranslate) => {
        return {
            wordName,
            wordTranslate,
            // TODO Changed examples maybe take 3 sentence from web?
            examples: [
                `a woman of her ability ${wordName} `,
                ` ${wordName} he has an ability for figures`,
                `a low ability student ${wordName} `,
                `You possess the ability to back your strong imagination with will and action. ${wordName} `
            ]
        };
    };

    const getInputValue = () => {
        return target.current.value.trim();
    };

    const createAndAddWordToRepo = () => {
        const inputValue = getInputValue();
        if (inputValue.length === 0 || inputValue.length > 11) {
            // TODO change alert to Popup
            setOpen(!isOpen);
            return;
        }
        const nav = createNavWord(inputValue, inputValue);
        addWordAction(nav);
    };

    const handleEnterPress = e => {
        if (e.which !== 13) return;
        createAndAddWordToRepo();
    };

    const handleButtonPress = () => {
        createAndAddWordToRepo();
    };

    return (
        <>
            <AddingWordsInputComponent>
                <InputWrapper>
                    <AddInput
                        type="text"
                        name=""
                        id="add-word"
                        placeholder="Add word"
                        ref={target}
                        onKeyPress={e => handleEnterPress(e)}
                    />
                    <Add
                        as={selectIcon()}
                        onClick={handleButtonPress}
                        onMouseEnter={onMouseEnterHandler}
                        onMouseLeave={onMouseLeaveHandler}
                    />
                </InputWrapper>
            </AddingWordsInputComponent>
            {isOpen && <AddWordModal isOpen={isOpen} setOpen={setOpen} />}
        </>
    );
};
export default connect(null, { addWordAction: addWord })(withRouter(AddWordsInput));
