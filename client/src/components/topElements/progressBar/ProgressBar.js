import React from 'react';
import Colors from "../Colors";
import {NavigationWordContext} from "../../mediumElements/leftElements/NavigationWordContainer";
import styled from "styled-components";


const Wrapper = styled.div`
    width: 275px;
    display: flex;
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

const progBarStyle = {
    width: "10%", //powinno byc 0
    height: "15px",
    backgroundColor: Colors.PROGRESS_BAR_BLUE,
    borderRadius: "8px",
    transition: "width 1.5s"
};

const completeStyle = {
    fontSize: "12.5px",
    fontWeight: "600",
    cursor: "text",
    padding: "5px 0"
};

const ProgressBar = (props) => {

    return (
        <NavigationWordContext.Consumer>
            {value =>
                (<Wrapper>
                    <div className={"progresBar"} id="progresBar" style={progresBarStyle}>
                        <div className={"progBar"} id={"progBar"} style={progBarStyle}/>
                    </div>
                    <span id={"complete"} style={completeStyle}>1 / {value}</span>
                </Wrapper>)
            }
        </NavigationWordContext.Consumer>
    );
};

export default ProgressBar