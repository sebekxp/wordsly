import React, {useState, useEffect, useCallback} from 'react';
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import {connect} from "react-redux";
import FavElementIcon from "../../../mediumElements/leftElements/navigationWord/icons/FavElementIcon";

const FlashCards = (props) => {
    const [flippy, changeFlip] = useState(false);
    const word = props.word;

    const handleUserKeyPress = useCallback(event => {
        const {keyCode} = event;

        if (keyCode === 32) {
            changeFlip(!flippy)
        }
    });

    const handleClick = () => {
        changeFlip(!flippy)
    };

    useEffect(() => {
        window.addEventListener('keyup', handleUserKeyPress);

        return () => {
            window.removeEventListener('keyup', handleUserKeyPress);
        };
    }, [handleUserKeyPress]);


    const flippyStyle = {
        width: "600px",
        height: "300px",
        borderRadius: "10px",
        padding: "0",
        margin: "0 auto",
        marginTop: "50px",
    };


    const frontSideStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "500",
        fontSize: "45px",
        borderRadius: "10px",
        boxShadow: "0px 0px 5px"
    };

    const backSideStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "500",
        fontSize: "45px",
        borderRadius: "10px",
        boxShadow: "0px 0p" +
            "x 5px",
    };


    return (
        <Flippy
            animationDuration={300}
            flipOnHover={false}
            flipDirection="vertical"
            isFlipped={flippy}
            style={flippyStyle}>
            <FrontSide style={frontSideStyle} onClick={handleClick}>
                {word.wordName}
                <FavElementIcon position={"absolute"} word={props.word}/>
            </FrontSide>
            <BackSide style={backSideStyle} onClick={handleClick}>
                {word.wordTranslate}
                <FavElementIcon position={"absolute"}/>
            </BackSide>
        </Flippy>
    );
};

const mapStateToProps = (state) => {
    const {wordsToRender} = state;

    return {
        word: wordsToRender.wordToShow,
    }
};
export default connect(mapStateToProps)(FlashCards);