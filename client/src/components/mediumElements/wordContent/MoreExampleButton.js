import React, {useState} from 'react';
import styled from "styled-components";


const MoreExampleButton = (props) => {

    const [isToggle, setToggle] = useState(false);

    const toggleMoreExample = () => {
        if (!isToggle)
            props.setHeight(1000);
        else
            props.setHeight(200);

        setToggle(!isToggle);
    };

    const calcHeightOfExamplesBox = () => {
        let firstThreeExamples = props.height;
        let heightExamples = 0;
        heightExamples += firstThreeExamples[0].getBoundingClientRect().height + 30;
        heightExamples += firstThreeExamples[1].getBoundingClientRect().height + 15;
        heightExamples += firstThreeExamples[2].getBoundingClientRect().height + 15;

        return heightExamples;
    };

    const MoreExamples = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 51px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top: 1px solid grey;
        
        &:hover{
            text-decoration: underline;
        }
    `;

    return (
        <MoreExamples onClick={toggleMoreExample}>
            More
        </MoreExamples>
    );
};

export default MoreExampleButton