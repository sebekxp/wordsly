import React, {useState} from 'react';
import {NavigationWordContext} from "../../mediumElements/leftElements/NavigationWordContainer";
import styled from "styled-components";
import MoreExampleButton from "./MoreExampleButton";
import FirstExampleWord from "./FirstExampleWord";


const toggleMoreExample = () => {

};

const WordContent = (props) => {
    const [feHeight, setFeHeight] = useState(200);

    const ExamplesContainer = styled.div`
        margin: 20px 20px;
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
                <h3 id={"key-word-header"} className={"key-word-header"}>WordName</h3>
            </KeyWordHeader>
            <FirstExampleWord height={feHeight} />
            <MoreExampleButton setHeight={setFeHeight}/>
        </ExamplesContainer>
    );
};

export default WordContent