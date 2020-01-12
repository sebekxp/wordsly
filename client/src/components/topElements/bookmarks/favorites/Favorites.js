import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Examples from "../../../mediumElements/wordContent/Examples";


const Favorites = (props) => {
    const words = props.wordsToRender;


    useEffect(() => {
        const navigationWord = window.document.getElementsByClassName("navigation-word");

        words.forEach((word, index) => {
            const isActive = word.active;
            if (!isActive) {
                navigationWord[index].style.display = "none";
            }
        });
    });

    return <Examples/>
};

const mapStateToProps = (state) => {
    const {wordsToRender} = state;
    return {
        wordsToRender: wordsToRender.words,
    }
};

export default connect(mapStateToProps)(Favorites);