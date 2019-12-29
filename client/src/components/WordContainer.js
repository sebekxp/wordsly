import React, {useState} from 'react';
import {Container} from 'reactstrap';
import TopElementsWrapper from "./topElements/TopElementsWrapper";
import MediumElementsWrapper from "./mediumElements/MediumElementsWrapper";

export const ProgressBarContext = React.createContext(0);


const wcStyle = {
    width: '68.75rem',
    height: '35rem',
    padding: "0",
    borderRadius: "10px",
    boxShadow: "0px 6px 10px",
    marginTop: "80px"
};


const WordsContainer = (props) => {
    const [knownWord, setKnownWord] = useState(0);
    const [numWords, setNumWords] = useState(0);

    return (
        <Container style={wcStyle}>
            <ProgressBarContext.Provider value={{
                numWords: numWords,
                knownWord: knownWord,
                setNumWords: (num) => setNumWords(num),
                // setKnownWord: (known) => setKnownWord(known),
            }}>
                <TopElementsWrapper/>
                <MediumElementsWrapper/>
            </ProgressBarContext.Provider>
        </Container>
    );
};

export default WordsContainer;