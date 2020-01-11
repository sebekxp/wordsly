import React, {useEffect} from 'react';
import {connect, useDispatch} from "react-redux";
import {setWords} from "../../../mediumElements/WordsToRenderSlice";


const Favorites = (props) => {
    const dispatch = useDispatch();
    const favWords = props.favWords;
    const words = props.wordsToRender;

    useEffect(() => {
        const navigationWord = window.document.getElementsByClassName("navigation-word");
        const navWordToArray = [...navigationWord];
        let index = [];

        for (let i = 0; i < words.length; i++) {
            navigationWord[i].style.display = "none";
            const wordName = words[i].wordName.toLowerCase();
            for (let j = 0; j < favWords.length; j++) {
                const favWordName = favWords[j].wordName.toLowerCase();
                if (wordName === favWordName)
                    index.push(i);
            }
        }
        for (let i = 0; i < words.length; i++) {
            for (let j = 0; j < index.length; j++) {
                console.log(i, index[j]);
                if (i === index[j])
                    navigationWord[i].style.display = "flex";
            }
        }
    });

    return <></>
};

const mapStateToProps = (state) => {
    const {favWordsToRender} = state;
    const {wordsToRender} = state;
    return {
        favWords: favWordsToRender.favWords,
        wordsToRender: wordsToRender.words,
    }
};

export default connect(mapStateToProps)(Favorites);