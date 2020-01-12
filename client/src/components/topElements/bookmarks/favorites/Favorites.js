import React, {useEffect} from 'react';
import {connect} from "react-redux";


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

    return <></>
};

const mapStateToProps = (state) => {
    const {wordsToRender} = state;
    return {
        wordsToRender: wordsToRender.words,
    }
};

export default connect(mapStateToProps)(Favorites);