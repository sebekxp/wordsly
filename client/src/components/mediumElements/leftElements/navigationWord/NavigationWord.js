import React, {useState, useRef} from "react";
import styled from 'styled-components';
import BlankCircleIcon from "./icons/BlankCircleIcon";
import DeleteElemIcon from "./icons/DeleteElementIcon";
import FavElementIcon from "./icons/FavElementIcon";
import {connect, useDispatch} from "react-redux";
import {setWordToShow} from "../../WordsToRenderSlice";

const NavigationWord = (props) => {
    const [word, setWord] = useState({});
    const targetRef = useRef();
    const dispatch = useDispatch();
    const words = props.words;
    const IconWrapper = styled.div`
         display: none;
    `;

    const shouldBeHide = () => {
        return props.shouldBeHide ? "none" : "flex"
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
                background-color: #a2a5a2;
            }
        } 
    `;

    const WordName = styled.div`
        font-size: 20px;
        width: 100%;
        cursor: pointer;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        padding: 11.8px 11.8px 11.8px 11.8px;
        background-color: rgb(215, 215, 215);
    `;


    const hoverMouseAndDisplayWordContent = (evt) => {
        for (let i = 0; i < words.length; i++) {
            if (words[i].wordName === evt.target.innerText) {
                setWord(words[i]);
                dispatch(setWordToShow(words[i]));
            }
        }
    };

    const handleClick = () => {
        if (props.wordToShow.wordName === targetRef.current.innerText)
            targetRef.current.style.backgroundColor = "#a2a5a2";
    };

    return (
        <NavigationWord
            onMouseOver={(event) => hoverMouseAndDisplayWordContent(event)}
            className={"navigation-word"}
            onClick={handleClick}>
            <BlankCircleIcon className={"blank-circle-icon"}/>
            <WordName ref={targetRef}>
                <span>{props.name}</span>
                <IconWrapper>
                    <FavElementIcon word={word} position={"relative"}/>
                    <DeleteElemIcon word={word}/>
                </IconWrapper>
            </WordName>
        </NavigationWord>);
};

const mapStateToProps = (state) => {
    const {wordsToRender} = state;
    return {
        words: wordsToRender.words,
        wordToShow: wordsToRender.wordToShow,
    }
};

export default connect(mapStateToProps)(NavigationWord);
