import React from 'react';
import NavigationWordContainer from "./NavigationWordContainer";
import AddingWordsInput from "./AddingWordsInput";

const style = {
    width: '275px',
    height: "calc(100% - (56.6px))",
};

const LeftElementsWrapper = (props) => {
    return (
        <div style={style}>
            <NavigationWordContainer id={"navigation-word-container"} className={"navigation-word-container"}/>
            <AddingWordsInput/>
        </div>
    );
};

export default LeftElementsWrapper;