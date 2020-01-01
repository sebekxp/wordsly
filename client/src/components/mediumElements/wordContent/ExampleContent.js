import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import {FormatQuote} from "styled-icons/material/FormatQuote"


const ExampleContent = (props) => {

    const [h] = useState(props.height);
    const examples = props.examples;

    const Wrapper = styled.div`
        display: flex;  
    `;
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

    const calcHeightOfExamplesBox = () => {
        const wrappers = document.getElementsByClassName("wrapper");
        console.log(ReactDOM.findDOMNode(Wrapper));
        let height = 0;
        // height +=wrappers[0].getBoundingClientRect().height;
        // height +=wrappers[1].getBoundingClientRect().height;
        // height +=wrappers[2].getBoundingClientRect().height;
        console.log(height);
    };

    return (
        <ExampleContent id={"first-example-word"} className={"first-example-word"}>
            {
                examples.map((example, index) =>
                    <Wrapper className={"wrapper"} key={index}>
                        <Quote/>
                        <p className={"exampleContents"}
                           dangerouslySetInnerHTML={{__html: makeHeaderWordBold(example, props.wordName)}}>
                        </p>
                    </Wrapper>)
            }
            {calcHeightOfExamplesBox()}
        </ExampleContent>
    );
};

export default ExampleContent