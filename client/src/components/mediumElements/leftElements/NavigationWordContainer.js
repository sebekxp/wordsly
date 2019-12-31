import React from "react";
import NavigationWord from "./navigationWord/NavigationWord";
import {OBJWORDS as words} from "../../words";


const NavigationWordContainer = (props) => {

    const style = {
        display: "flex",
        width: '275px',
        flexDirection: "column",
        height: '446.8px',
        border: "1px solid black",
        boxSizing: "border-box",
        backgroundColor: "#f1f1f1",
        overflow: "auto",
    };

    return (
        <div id={props.id} className={props.className} style={style}>
            {
                words.map((word, index) =>
                    <NavigationWord name={word.wordName} key={index}/>)
            }
        </div>
    );

};

export default NavigationWordContainer;