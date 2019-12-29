import React from 'react';
import {Container} from 'reactstrap';
import TopElementsWrapper from "./topElements/TopElementsWrapper";
import MediumElementsWrapper from "./mediumElements/MediumElementsWrapper";


const wcStyle = {
    width: '68.75rem',
    height: '35rem',
    padding: "0",
    borderRadius: "10px",
    boxShadow: "0px 6px 10px",
    marginTop: "80px"
};


const WordsContainer = (props) => {
    return (
        <Container style={wcStyle}>
            <TopElementsWrapper/>
            <MediumElementsWrapper/>
        </Container>
    );
};

export default WordsContainer;