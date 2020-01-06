import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import MoreExampleButton from "./MoreExampleButton";
import ExampleContent from "./ExampleContent";
import {useSelector} from "react-redux";


const WordContent = () => {
    const [feHeight, setFeHeight] = useState(200);
    const [fullHeight, setFullHeight] = useState();
    const [isToggle, setToggle] = useState(false);
    const globalWord = useSelector(state => state.showContent);
    const [word, setWord] = useState(globalWord);

    useEffect(() => {
        setWord(globalWord);
    }, [globalWord]);


    const ExamplesContainer = styled.div`
        margin: 50px 50px;
        width: 600px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px;
    `;

    const KeyWordHeader = styled.div`
        display: flex;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        justify-content: center;
        align-items: center;
        
        h3 {
            padding: 5px 0;
        }      
    `;

    return (
        <ExamplesContainer>
            <KeyWordHeader>
                <h3>{word.wordName} - {word.wordTranslate}</h3>
            </KeyWordHeader>
            <ExampleContent height={feHeight}
                            isToggle={isToggle}
                            setFullHeight={setFullHeight}
                            examples={word.examples}
                            wordName={word.wordName}/>
            <MoreExampleButton height={feHeight}
                               isToggle={isToggle}
                               setToggle={setToggle}
                               fullHeight={fullHeight}
                               setHeight={setFeHeight}/>
        </ExamplesContainer>
    );
};

export default WordContent