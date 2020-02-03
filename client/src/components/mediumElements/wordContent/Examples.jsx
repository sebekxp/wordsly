import React from 'react';
import styled from 'styled-components';
import ExampleContent from './ExampleContent';
import Colors from '../../Colors';


const Examples = () => {

    const ExamplesContainer = styled.div`
        margin: 50px auto;
        width: 600px;
        border-radius: 10px;
        background-color: ${Colors.EXAMPLES_BACKGROUND}
        box-shadow: ${Colors.BOX_SHADOW};
    `;

    return (
        <ExamplesContainer>
            <ExampleContent/>
        </ExamplesContainer>
    );
};

export default Examples;