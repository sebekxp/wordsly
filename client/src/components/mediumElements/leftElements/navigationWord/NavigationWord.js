import React, { useState } from 'react';
import styled from 'styled-components';
import BlankCircleIcon from './icons/BlankCircleIcon';
import DeleteElemIcon from './icons/DeleteElementIcon';
import FavElementIcon from './icons/FavElementIcon';
import { connect, useDispatch } from 'react-redux';
import { setWordToShow } from '../../WordsToRenderSlice';
import Colors from '../../../Colors';

const NavigationWord = (props) => {
    const [word, setWord] = useState(props.word);
    const dispatch = useDispatch();
    const words = props.words;

    const IconWrapper = styled.div`
         display: none;
    `;

    const shouldBeHide = () => {
        return props.shouldBeHide ? 'none' : 'flex';
    };

    const NavigationWord = styled.div`
        display: ${shouldBeHide()};
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
        return props.name === props.wordToShow.wordName ? Colors.NAVIGATION_WORD_BACKGROUND_HOVER :
            Colors.NAVIGATION_WORD_BACKGROUND;
        // return Colors.NAVIGATION_WORD_BACKGROUND;
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
                setWord(words[i]);
                break;
            }
        }
    };

    return (
        <NavigationWord
            onClick={(event) => clickMouseAndDisplayWordContent(event)}
            onMouseOver={e => handleMouseOver(e)}
            className={'navigation-word'}>
            <BlankCircleIcon className={'blank-circle-icon'} word={word}/>
            <WordName>
                <span>{props.name}</span>
                <IconWrapper>
                    <FavElementIcon word={word} position={'relative'}/>
                    <DeleteElemIcon word={word}/>
                </IconWrapper>
            </WordName>
        </NavigationWord>);
};

const mapStateToProps = (state) => {
    const { wordsToRender } = state;
    return {
        // words: wordsToRender.words,
        wordToShow: wordsToRender.wordToShow
    };
};

export default connect(mapStateToProps)(NavigationWord);
