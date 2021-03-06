import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import ParagraphWrapper from '../ParagraphWrapper';
import MoreExampleButton from '../MoreExampleButton';
import { ExampleContentComponent, KeyWordHeader, Quote } from './ExampleContent.style';
import { wordProp } from '../../utils/propTypes';
// TODO If words doesn't load properly make sure the actions don't cause problems
const ExampleContent = ({ word }) => {
    const [expand, setExpand] = useState(false);
    const examples = word !== undefined && word.examples;

    const targetRef = useRef(0);
    let scrollClickCounter = 0;

    const scrollToBottom = () => {
        const element = document.getElementById('word-content-container');

        // Scroll to first example of paragraphs
        if (scrollClickCounter === 0) {
            element.children[1].scrollIntoView();
        }

        if (expand && scrollClickCounter < 29) {
            // noinspection JSUnresolvedVariable
            element.scrollBy(0, targetRef.current.children[scrollClickCounter++].offsetHeight);
        }
    };

    const scrollToTop = () => {
        const element = document.getElementById('word-content-container');

        if (expand && scrollClickCounter > 0) {
            // noinspection JSUnresolvedVariable
            element.scrollBy(0, -targetRef.current.children[scrollClickCounter--].offsetHeight);
        }
    };
    useEffect(() => {
        const handleKeyDown = event => {
            if (event.which === 40) {
                scrollToBottom();
            }

            if (event.which === 38) scrollToTop();
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    useEffect(() => {
        setExpand(false);
    }, [word]);

    const makeHeaderWordBold = (str, wordName) => {
        return str.replace(` ${wordName} `, ` <b>${wordName}</b> `);
    };

    const style = {
        padding: '5px 5px'
    };

    const exampleContentToRender = () => {
        return (
            word !== undefined && (
                <div style={style}>
                    <KeyWordHeader>
                        <h3>
                            {word.wordName} - {word.wordTranslate}
                        </h3>
                    </KeyWordHeader>
                    <ExampleContentComponent ref={targetRef}>
                        {examples
                            .filter((elem, index) => index < (expand ? examples.length : 3))
                            .map(example => (
                                <ParagraphWrapper key={uuid()}>
                                    <Quote />
                                    {/* eslint react/no-danger:0 */}
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: makeHeaderWordBold(example, word.wordName)
                                        }}
                                    />
                                </ParagraphWrapper>
                            ))}
                    </ExampleContentComponent>
                    <MoreExampleButton expand={expand} setExpand={setExpand} />
                </div>
            )
        );
    };

    return exampleContentToRender();
};

ExampleContent.propsTypes = {
    word: wordProp.isRequired
};

const mapStateToProps = state => {
    const { wordsToRender } = state;

    return {
        word: wordsToRender.wordToShow
    };
};

export default connect(mapStateToProps)(ExampleContent);
