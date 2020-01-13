import React, {useEffect} from 'react';
import {connect, useDispatch} from "react-redux";
import Examples from "../../../mediumElements/wordContent/Examples";


const Favorites = (props) => {
    const words = props.favWords;

    useEffect(() => {

        const navigationWord = window.document.getElementsByClassName("navigation-word");

        const array = [...navigationWord];
        const navWordToArrayOfName = [];
        for (let i = 0; i < array.length; i++) {
            navWordToArrayOfName.push(array[i].innerText);
        }
        // console.log(words);
        // console.log(navWordToArrayOfName);
        words.forEach((word) => {
            console.log(word.wordName);
            const index = navWordToArrayOfName.indexOf(word.wordName);
            console.log(index);
            // navigationWord[index].style.display = "none";

        });
    });

    return <Examples/>
};

const mapStateToProps = (state) => {
    const {favWordsToRender} = state;

    return {
        favWords: favWordsToRender.favWords,
    }
};

export default connect(mapStateToProps)(Favorites);