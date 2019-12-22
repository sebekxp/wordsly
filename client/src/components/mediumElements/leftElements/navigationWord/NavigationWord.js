import React from "react";
import { faCircle, faStar } from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import {Star} from "styled-icons/boxicons-solid/Star";


class NavigationWord extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const FavElemIcon = styled(Star)`
            &::before {}
            display: none;
            color: #FFD700;
            
            &:hover {
                color: #28a745;
            }
        }
        `;

        const DeleteElem = styled.i`
            font-size: 15px;
            color: #dc3545;
            padding: 20px;
        `;

        const CircleIcon = styled.div`
          display: none;
          justify-content: center;
          align-items: center;
          position: absolute;
          border-radius: 50%;
          border: 1.3px solid #dc3545;
          width: 30px;
          height: 30px;
          right: 5px;
          transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
          
          &:hover {
                background-color: #dc3545;
                
                ${DeleteElem} {
                    color: #cccccc;
                }
            }
        `;

        const NavigationWord = styled.div`
            position: relative;
            display: flex;
            justifyContent: center;
            alignItems: center;
            marginBottom: 2.5px;
            
            &:nth-of-type(1) {
                margin-top: 5px;
            }
            
            &:hover {
                ${CircleIcon} {
                    display: flex;
                }
                
                ${FavElemIcon}  {
                    '&::before' {
                       display: block;
                    }
                }
                
                p {
                    background-color: #a2a5a2;
                }                 
            } 
            `;

        const blankCircleStyle = {
            color: "#28a745",
            borderRadius: "5px",
            padding: "13px 13px",
            marginRight: "1px",
            fontSize: "20px",
            backgroundColor: "rgb(215, 215, 215)"
       };

        const WordName = styled.p`
            font-size: 20px;
            width: 100%;
            cursor: pointer;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            padding: 11.8px 33px 11.8px 11.6px;
            background-color: rgb(215, 215, 215);
        `;
    // .fa-star::before {
    //         display: none;
    //         color: #FFD700;
    //     }
    //
    //
    // .fa-star:hover {
    //         font-family: "Font Awesome 5 Free";
    //         font-weight: 900;
    //     }


        return (
            <NavigationWord className={"navigation-word"}>
                <CircleIcon className={"circle-icon"}>
                    {/*<DeleteElem  />*/}
                    <FontAwesomeIcon className={"deleteElem"} icon={faCircle} title={"Delete word"}/>
                </CircleIcon>
                {/*<BlankCircle className={"blank-circle far fa-circle"} title={"Mark as known word"}/>*/}
                <FontAwesomeIcon className={"blank-circle"}  icon={faCircle} title={"Mark as known word"} style={blankCircleStyle}/>
                {/*{asd}*/}
                <WordName className={"words"}>
                    "a"
                    {/*<FontAwesomeIcon className={"star"} icon={faStar} title={"Add to favorites words"} style={FavElem}/>*/}
                    <FavElemIcon className={"star"} title={"Add to favorites words"} size="30"/>

                </WordName>

            </NavigationWord>
        );
    }
}

export default NavigationWord;