import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import ProgressBar from "./ProgressBar";

const wcStyle = {
    width: '68.75rem',
    height: '35rem',
    padding: "0",
    borderRadius: "10px",
    boxShadow: "0px 6px 10px"
};

const WordsContainer = (props) => {
    return (
        <Container style={wcStyle}>
        <ProgressBar>

        </ProgressBar>
        </Container>
    );
};

export default WordsContainer;