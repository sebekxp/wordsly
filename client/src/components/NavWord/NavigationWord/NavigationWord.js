import React, { useState } from 'react';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';
import BlankCircleIcon from './Icons/BlankCircleIcon';
import DeleteElemIcon from './Icons/DeleteElementIcon';
import FavElementIcon from './Icons/FavElementIcon';
import { setWordToShow } from '../../../redux/wordsToRenderReducer';
import Colors from '../../utils/Colors';

const NavigationWord = ({ words, word, name, wordToShow, shouldBeHide }) => {
    const [wordObj, setWordObj] = useState(word);
    const dispatch = useDispatch();

    const IconWrapper = styled.div`
         display: none;
    `;

    const getDisplay = () => {
        return shouldBeHide ? 'none' : 'flex';
    };

    const NavigationWordComponent = styled.div`
        display: ${getDisplay()};
        justify-content: center;
        align-items: center;
        margin-bottom: 3px;
                    
        &:nth-of-type(1) {
            margin-top: 5px;
        }
        
        p {
            margin: 0;
        }

        &:hover {
            ${IconWrapper} {
                 display: flex;
            }
            
            div {
                background-color: ${Colors.NAVIGATION_WORD_BACKGROUND_HOVER};
            }
        } 
    `;

    const selectColor = () => {
        return name === wordToShow.wordName ? Colors.NAVIGATION_WORD_BACKGROUND_HOVER :
            Colors.NAVIGATION_WORD_BACKGROUND;
    };

    const WordName = styled.div`
        font-size: 20px;
        width: 100%;
        cursor: pointer;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        padding: 11.8px 11.8px 11.8px 11.8px;
        background-color: ${selectColor()};
    `;

    const clickMouseAndDisplayWordContent = (evt) => {
        for (let i = 0; i < words.length; i++) {
            if (words[i].wordName === evt.target.innerText) {
                dispatch(setWordToShow(words[i]));
                break;
            }
        }
    };

    const handleMouseOver = (evt) => {
        for (let i = 0; i < words.length; i++) {
            if (words[i].wordName === evt.target.innerText) {
                setWordObj(words[i]);
                break;
            }
        }
    };

    return (
        <NavigationWordComponent
            onClick={(event) => clickMouseAndDisplayWordContent(event)}
            onMouseOver={e => handleMouseOver(e)}
            onFocus={e => handleMouseOver(e)}
            className="navigation-word">
            <BlankCircleIcon className="blank-circle-icon" word={wordObj}/>
            <WordName>
                <span>{name}</span>
                <IconWrapper>
                    <FavElementIcon word={wordObj} position="relative"/>
                    <DeleteElemIcon word={wordObj}/>
                </IconWrapper>
            </WordName>
        </NavigationWordComponent>);
};

const mapStateToProps = (state) => {
    const { wordsToRender } = state;
    return {
        wordToShow: wordsToRender.wordToShow
    };
};

export default connect(mapStateToProps)(NavigationWord);
