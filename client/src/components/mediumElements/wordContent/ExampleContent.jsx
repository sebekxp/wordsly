import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FormatQuote } from 'styled-icons/material/FormatQuote';
import { connect } from 'react-redux';
import uuid from 'uuid';
import ParagraphWrapper from './ParagraphWrapper';
import MoreExampleButton from './MoreExampleButton';

const ExampleContent = ({ word }) => {
    const [expand, setExpand] = useState(false);
    const examples = word !== undefined && word.examples;
    const targetRef = useRef(0);

    useEffect(() => {
        setExpand(false);
    }, [word]);


    const ExampleContentComponent = styled.div`
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
        return str.replace(` ${wordName} `, ` <b>${wordName}</b> `);
    };

    const style = {
        padding: '5px 5px'
    };

    const exampleContentToRender = () => {
        return (
            word !== undefined &&
            <div style={style}>
                <KeyWordHeader>
                    <h3>{word.wordName} - {word.wordTranslate}</h3>
                </KeyWordHeader>
                <ExampleContentComponent ref={targetRef}>
                    {
                        examples.filter((elem, index) =>
                            index < (expand ? examples.length : 3)).map((example) =>
                            <ParagraphWrapper key={uuid()}>
                                <Quote/>
                                {/* eslint react/no-danger:0 */}
                                <p dangerouslySetInnerHTML={{ __html: makeHeaderWordBold(example, word.wordName) }}/>
                            </ParagraphWrapper>)
                    }
                </ExampleContentComponent>
                <MoreExampleButton expand={expand} setExpand={setExpand}/>
            </div>
        );
    };

    return (exampleContentToRender());
};

const mapStateToProps = (state) => {
    const { wordsToRender } = state;
    return {
        word: wordsToRender.wordToShow
    };
};

export default connect(mapStateToProps)(ExampleContent);
