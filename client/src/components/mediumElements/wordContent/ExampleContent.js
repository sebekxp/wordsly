import React, {useState, useRef, useEffect} from 'react';
import styled from "styled-components";
import {FormatQuote} from "styled-icons/material/FormatQuote"
import ParagraphWrapper from "./ParagraphWrapper";
import MoreExampleButton from "./MoreExampleButton";
import uuid from 'uuid';
import {useSelector} from "react-redux";


const ExampleContent = (props) => {
    const globalWord = useSelector(state => state.showContent.word);
    const [expand, setExpand] = useState(false);
    const [word, setWord] = useState(globalWord);
    const [h, setH] = useState(200);
    const examples = word.examples;
    const targetRef = useRef();


    useEffect(() => {
        setWord(globalWord);
        const paragraphs = targetRef.current.childNodes;

        if (expand)
            setH(calcFullHeight(paragraphs));
        else
            setH(calcMintHeight(paragraphs));
    }, [expand, globalWord]);

    const calcMintHeight = (list) => {
        let h = 0;
        h += list[0].offsetHeight;
        h += list[1].offsetHeight;
        h += list[2].offsetHeight;

        return h;
    };

    const calcFullHeight = (list) => {
        let fullH = 0;
        for (let i = 0; i < list.length; i++) {
            fullH += list[i].offsetHeight;
        }

        return fullH;
    };

    const ExampleContent = styled.div`
        height: ${h}px;
        overflow: hidden;
        
        p {
          padding: 10px 0;
          width: 95%;
          margin: 0;
        }
    `;

    const Quote = styled(FormatQuote)`
         width: 5%;
         height: 24px;
         margin: 10px 5px;
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

    const makeHeaderWordBold = (str, wordName) => {
        return str.replace(" " + wordName + " ", ' <b>' + wordName + '</b> ')
    };

    return (
        <>
            <KeyWordHeader>
                <h3>{word.wordName} - {word.wordTranslate}</h3>
            </KeyWordHeader>
            <ExampleContent ref={targetRef}>
                {
                    examples.map((example) =>
                        <ParagraphWrapper key={uuid()}>
                            <Quote/>
                            <p dangerouslySetInnerHTML={{__html: makeHeaderWordBold(example, props.wordName)}}/>
                        </ParagraphWrapper>)
                }
            </ExampleContent>
            <MoreExampleButton expand={expand} setExpand={setExpand}/>
        </>
    );
};

export default ExampleContent