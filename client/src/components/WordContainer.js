import React, {useState} from 'react';
import styled from "styled-components";
import TopElementsWrapper from "./topElements/TopElementsWrapper";
import MediumElementsWrapper from "./mediumElements/MediumElementsWrapper";

export const ProgressBarContext = React.createContext(0);

const Container = styled.div`
    width: 68.75rem;
    height: 35rem;
    padding: 0;
    border-radius: 10px;
    box-shadow: 0px 0px 10px;
    margin: auto;
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
`;


const WordsContainer = () => {
    console.log("WordsContainer");
    const [knownWord, setKnownWord] = useState(0);

    return (
        <Container>
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