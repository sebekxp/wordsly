import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import BlankCircleIcon from './Icons/BlankCircleIcon';
import DeleteElemIcon from './Icons/DeleteElementIcon';
import FavElementIcon from './Icons/FavElementIcon';
import { setWordToShow } from '../../../redux/wordsToRenderReducer';
import { IconWrapper, NavigationWordComponent, WordName } from './NavigationWord.style';
// TODO Delete word form list hide it only fix it
const NavigationWord = ({ words, word, name, wordToShow, shouldBeHide }) => {
    const [wordObj, setWordObj] = useState(word);
    const dispatch = useDispatch();

    const clickMouseAndDisplayWordContent = evt => {
        // TODO filter
        for (let i = 0; i < words.length; i++) {
            if (words[i].wordName === evt.target.innerText) {
                dispatch(setWordToShow(words[i]));
                break;
            }
        }
    };

    const handleMouseOver = evt => {
        for (let i = 0; i < words.length; i++) {
            if (words[i].wordName === evt.target.innerText) {
                setWordObj(words[i]);
                break;
            }
        }
    };

    return (
        <NavigationWordComponent
            shouldBeHide={shouldBeHide}
            onClick={event => clickMouseAndDisplayWordContent(event)}
            onMouseOver={e => handleMouseOver(e)}
            onFocus={e => handleMouseOver(e)}
            className="navigation-word"
        >
            <BlankCircleIcon className="blank-circle-icon" word={wordObj} />
            <WordName name={name} wordName={wordToShow.wordName}>
                <span>{name}</span>
                <IconWrapper>
                    <FavElementIcon word={wordObj} position="relative" />
                    <DeleteElemIcon word={wordObj} />
                </IconWrapper>
            </WordName>
        </NavigationWordComponent>
    );
};

const mapStateToProps = state => {
    const { wordsToRender } = state;
    return {
        wordToShow: wordsToRender.wordToShow
    };
};

export default connect(mapStateToProps)(NavigationWord);
