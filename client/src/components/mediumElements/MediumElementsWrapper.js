import React from 'react';
import WordContentContainer from "./wordContent/WordContentContainer";
import LeftElementsWrapper from "./leftElements/LeftElementsWrapper";

const style = {
    display: "flex",
    width: "100%",
};

const MediumElementsWrapper = (props) => {
    return (
        <div style={style}>
            <LeftElementsWrapper/>
            <WordContentContainer/>
        </div>
    );
};

export default MediumElementsWrapper;