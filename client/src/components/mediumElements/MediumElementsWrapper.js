import React from 'react';
import WordContent from "./WordContent";
import LeftElementsWrapper from "./leftElements/LeftElementsWrapper";

const style = {
    display: "flex",
    width: "100%",
};

const MediumElementsWrapper = (props) => {
    return (
        <div style={style}>
            <LeftElementsWrapper/>
            <WordContent/>
        </div>
    );
};

export default MediumElementsWrapper;