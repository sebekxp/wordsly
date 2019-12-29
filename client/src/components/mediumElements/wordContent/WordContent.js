import React, {useState} from 'react';
import styled from "styled-components";
import MoreExampleButton from "./MoreExampleButton";
import ExampleContent from "./ExampleContent";


const WordContent = (props) => {
    const [feHeight, setFeHeight] = useState(200);
    const wordObj = props.obj;

    const ExamplesContainer = styled.div`
        margin: 20px 20px;
        width: 500px;
        border-radius: 10px;
        border: 1px solid gray;
    `;

    const KeyWordHeader = styled.div`
        display: flex;
        border-bottom: 1px solid grey;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        justify-content: center;
        align-items: center;
        
        h3 {
            padding: 5px 0;
        }      
    `;


    return (
        <ExamplesContainer className={"examples-container"}>
            <KeyWordHeader className={"key-word-header "}>
                <h3 id={"key-word-header"}
                    className={"key-word-header"}>{wordObj.wordName} - {wordObj.wordTranslate}</h3>
            </KeyWordHeader>
            <ExampleContent height={feHeight} examples={wordObj.examples} wordName={wordObj.wordName}/>
            <MoreExampleButton height={feHeight} setHeight={setFeHeight}/>
        </ExamplesContainer>
    );
};

export default WordContent