import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import ProgressBar from "./ProgressBar";
import BookmarksBar from "./topElements/bookmarks/BookmarksBar";
import TopElementsWrapper from "./topElements/TopElementsWrapper";

const wcStyle = {
    width: '68.75rem',
    height: '35rem',
    padding: "0",
    borderRadius: "10px",
    boxShadow: "0px 6px 10px",
    marginTop: "80px"
};
const style = {
    display: "flex"
};

const WordsContainer = (props) => {
    return (
        <Container style={wcStyle}>
            <TopElementsWrapper/>
        </Container>
    );
};

export default WordsContainer;