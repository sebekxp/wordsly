import React, {useState} from 'react';
import WordContentContainer from "./wordContent/WordContentContainer";
import LeftElementsWrapper from "./leftElements/LeftElementsWrapper";
import {OBJWORDS as words} from "../words";
export const ShowExampleContext = React.createContext();


const style = {
    display: "flex",
    width: "100%",
};

const MediumElementsWrapper = (props) => {

    const [word, setWord] = useState(words[0]);

    return (
        <div style={style}>
            <ShowExampleContext.Provider value={{
                word: word,
                setWord: (w) => setWord(w)
            }}>
                <LeftElementsWrapper/>
                <WordContentContainer/>
            </ShowExampleContext.Provider>
        </div>
    );
};

export default MediumElementsWrapper;