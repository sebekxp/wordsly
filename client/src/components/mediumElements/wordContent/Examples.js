import React from 'react';
import styled from "styled-components";
import ExampleContent from "./ExampleContent";


const Examples = () => {
    
    const ExamplesContainer = styled.div`
        margin: 50px 50px;
        width: 600px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px;
    `;

    return (
        <ExamplesContainer>
            <ExampleContent/>
        </ExamplesContainer>
    );
};

export default Examples