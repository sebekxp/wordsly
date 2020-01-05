import React, {useState, useRef, useEffect} from 'react';
import styled from "styled-components";
import {FormatQuote} from "styled-icons/material/FormatQuote"
import ParagraphWrapper from "./ParagraphWrapper";


const ExampleContent = (props) => {
    const [h, setH] = useState(props.height);
    const examples = props.examples;
    const targetRef = useRef();

    useEffect(() => {
        const paragraphs = targetRef.current.childNodes;

        if (props.isToggle)
            setH(calcFullHeight(paragraphs));
        else
            setH(calcStartHeight(paragraphs));
    }, [props.isToggle]);

    const calcStartHeight = (list) => {
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

    const makeHeaderWordBold = (str, wordName) => {
        return str.replace(" " + wordName + " ", ' <b>' + wordName + '</b> ')
    };

    return (
        <ExampleContent ref={targetRef}>
            {
                examples.map((example, index) =>
                    <ParagraphWrapper key={index}>
                        <Quote/>
                        <p dangerouslySetInnerHTML={{__html: makeHeaderWordBold(example, props.wordName)}}/>
                    </ParagraphWrapper>)
            }
        </ExampleContent>
    );
};

export default ExampleContent