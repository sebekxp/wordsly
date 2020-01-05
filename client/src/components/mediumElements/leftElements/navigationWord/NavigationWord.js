import React from "react";
import styled from 'styled-components';
import BlankCircleIcon from "./icons/BlankCircleIcon";
import DeleteElemIcon from "./icons/DeleteElementIcon";
import FavElementIcon from "./icons/FavElementIcon";
import {OBJWORDS as words} from "../../../words";
import {useDispatch} from "react-redux";
import {setWordContent} from "../../wordContent/WordContentSlice";


const NavigationWord = (props) => {
    const dispatch = useDispatch();

    const IconWrapper = styled.div`
         display: none;
    `;

    const NavigationWord = styled.div`
        display: flex;
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
                dispatch(setWordContent(words[i]));
            }
        }
    };

    return (
        <NavigationWord onMouseOver={(event) => hoverMouseAndDisplayWordContent(event)}>
            <BlankCircleIcon/>
            <WordName>
                {props.name}
                <IconWrapper>
                    <FavElementIcon/>
                    <DeleteElemIcon/>
                </IconWrapper>
            </WordName>
        </NavigationWord>);
};

export default NavigationWord;