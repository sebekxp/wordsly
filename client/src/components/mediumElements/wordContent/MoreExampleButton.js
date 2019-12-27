import React, {useState} from 'react';
import styled from "styled-components";


const MoreExampleButton = (props) => {

    const [isToggle, setToggle] = useState(false);

    const toggleMoreExample = ()=> {
        if(!isToggle)
            props.setHeight(400);
        else
            props.setHeight(200);

        setToggle(!isToggle);
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