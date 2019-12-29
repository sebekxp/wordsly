import React, {useState} from 'react';
import styled from "styled-components";


const ExampleContent = (props) => {
    const [h] = useState(props.height);
    const examples = props.examples;

    const FirstExampleWords = styled.div`
        text-align: center;
        height: ${h}px;
        overflow: hidden;
        
        p {
          padding: 15px 5px;
        }
    `;

    return (
        <FirstExampleWords id={"first-example-word"} className={"first-example-word"}>
            {
                examples.map((example, index) =>
                    <p className={"exampleContents"} key={index}>
                        {/*/!*{example = example.split(" ")}*!/*/}
                        {/*{*/}
                        {/*        example.split(" ").forEach((word, index) => {*/}
                        {/*            console.log(word);*/}
                        {/*            if (example[index] === props.wordName) {*/}
                        {/*                // example.replace(example[index], <b>{example[index]}</b>)*/}
                        {/*                Object.assign(example[index] , <b>{example[index] }</b>*/}
                        {/*                );*/}
                        {/*            }*/}
                        {/*        })*/}
                        {/*    }*/}
                        {/*    {console.log(example)}*/}
                        {example}
                    </p>)
            }
        </FirstExampleWords>
    );
};

export default ExampleContent