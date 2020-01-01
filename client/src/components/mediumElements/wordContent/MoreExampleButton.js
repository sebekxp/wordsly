import React from 'react';
import styled from "styled-components";


const MoreExampleButton = (props) => {

    const toggleMoreExample = () => {
        if (!props.isToggle)
            props.setHeight(props.fullHeight);
        else
            props.setHeight(props.height);

        props.setToggle(!props.isToggle);
    };

    const MoreExamples = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 51px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        // border-top: 1px solid grey;
        
        &:hover{
            text-decoration: underline;
        }
    `;

    return (
        <MoreExamples onClick={toggleMoreExample}>
            {!props.isToggle ? "More" : "Less"}
        </MoreExamples>
    );
};

export default MoreExampleButton