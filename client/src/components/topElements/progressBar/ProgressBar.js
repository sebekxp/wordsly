import React, {useContext} from 'react';
import Colors from "../Colors";
import {ProgressBarContext} from "../../WordContainer";
import styled from "styled-components";
import {OBJWORDS as words} from "../../words";

const Wrapper = styled.div`
    width: 275px;
    display: flex;
    padding: 5px;
    background-color: ${Colors.DEFAULT_GREY};
    color: ${Colors.PROGRESS_BAR_TEXT};
    flex-direction: column;
    text-align: center;
    border-radius: 10px 0 0 0;
`;

const progresBarStyle = {
    border: "1.5px solid black",
    padding: "0.1px 0px",
    borderRadius: "20px",
    margin: "5px 10px",
};

const completeStyle = {
    fontSize: "12.5px",
    fontWeight: "600",
    cursor: "text",
    padding: "5px 0"
};

const ProgressBar = (props) => {
    const ctx = useContext(ProgressBarContext);

    const getCurrentProgress = (knownWords) => {
        const numOfKnownWords = knownWords;
        const percentageValue = 100 / words.length;

        return numOfKnownWords * percentageValue;
    };

    const progBarStyle = {
        width:  getCurrentProgress(ctx.knownWord) + "%",
        height: "15px",
        backgroundColor: Colors.PROGRESS_BAR_BLUE,
        borderRadius: "8px",
        transition: "width 1.5s"
    };

    return (
        (<Wrapper>
            <div className={"progresBar"} id="progresBar" style={progresBarStyle}>
                <div className={"progBar"} id={"progBar"} style={progBarStyle}/>
            </div>
            <span id={"complete"} style={completeStyle}>{ctx.knownWord} / {words.length}</span>
        </Wrapper>)
    );
};

export default ProgressBar