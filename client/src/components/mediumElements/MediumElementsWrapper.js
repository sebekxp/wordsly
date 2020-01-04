import React, {useState} from 'react';
import styled from "styled-components";
import WordContentContainer from "./wordContent/WordContentContainer";
import LeftElementsWrapper from "./leftElements/LeftElementsWrapper";
import {OBJWORDS as words} from "../words";

export const ShowExampleContext = React.createContext();

const MediumElementsWrapper = () => {

    const Wrapper = styled.div`
        display: flex;
        width: 100%;
    `;

    const [word, setWord] = useState(words[0]);

    return (
        <Wrapper>
            <ShowExampleContext.Provider value={{
                word: word,
                setWord: (w) => setWord(w)
            }}>
                <LeftElementsWrapper/>
                <WordContentContainer/>
            </ShowExampleContext.Provider>
        </Wrapper>
    );
};

export default MediumElementsWrapper;