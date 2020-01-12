import React, {useState, useRef, useEffect} from 'react';
import styled from "styled-components";
import {FormatQuote} from "styled-icons/material/FormatQuote"
import ParagraphWrapper from "./ParagraphWrapper";
import MoreExampleButton from "./MoreExampleButton";
import {connect} from "react-redux";


const ExampleContent = (props) => {
    const word = props.word;
    const [expand, setExpand] = useState(false);
    const examples = word.examples;
    const targetRef = useRef();

    useEffect(() => {
        const navigationWord = window.document.getElementsByClassName("navigation-word");
        [...navigationWord].forEach(obj=>{
           obj.style.display = "flex";
        });

        setExpand(false);
    }, [word]);


    const ExampleContent = styled.div`
        height: auto;
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
                    examples.filter((elem, index) =>
                    index < (expand ? examples.length : 3)).map((example, index) =>
                    <ParagraphWrapper key={index}>
                    <Quote/>
                    <p dangerouslySetInnerHTML={{__html: makeHeaderWordBold(example, word.wordName)}}/>
                    </ParagraphWrapper>)
                }
            </ExampleContent>
            <MoreExampleButton expand={expand} setExpand={setExpand}/>
        </>
    );
};

const mapStateToProps = (state) => {
    const {showContent} = state;
    return {word: showContent.word}
};

export default connect(mapStateToProps)(ExampleContent);
