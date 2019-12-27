import React from "react";
import styled from 'styled-components';
import {Star} from "styled-icons/boxicons-solid/Star";
import BlankCircleIcon from "./icons/BlankCircleIcon";
import DeleteElemIcon from "./icons/DeleteElementIcon";
import FavElementIcon from "./icons/FavElementIcon";


class NavigationWord extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const IconWrapper = styled.div`
            display: none;
        `;

        const NavigationWord = styled.div`
            // position: relative;
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
                ${IconWrapper}  {
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


        return (
            <NavigationWord className={"navigation-word"}>
                <BlankCircleIcon/>
                <WordName className={"words"}>
                    "a"
                    <IconWrapper>
                        <FavElementIcon/>
                        <DeleteElemIcon/>
                    </IconWrapper>
                </WordName>
            </NavigationWord>
        );
    }
}

export default NavigationWord;