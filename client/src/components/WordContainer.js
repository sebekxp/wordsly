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
    boxShadow: "0px 0px 10px",
    marginTop: "80px"
};


const WordsContainer = (props) => {
    const [knownWord, setKnownWord] = useState(0);

    return (
        <Container style={wcStyle}>
            <ProgressBarContext.Provider value={{
                knownWord: knownWord,
                setKnownWord: (num) => {
                    setKnownWord(num)
                },
            }}>
                <TopElementsWrapper/>
                <MediumElementsWrapper/>
            </ProgressBarContext.Provider>
        </Container>
    );
};

export default WordsContainer;