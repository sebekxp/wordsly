import React from 'react';
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import {connect} from "react-redux";
import FavElementIcon from "../../../mediumElements/leftElements/navigationWord/icons/FavElementIcon";

const FlashCards = (props) => {
    const word = props.word;

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
        boxShadow: "0px 0px 5px",
    };

    return (
        <Flippy
            animationDuration={300}
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="vertical"
            style={flippyStyle}>
            <FrontSide style={frontSideStyle}>
                {word.wordName}
                <FavElementIcon position={"absolute"}/>
                </FrontSide>
            <BackSide style={backSideStyle}>
                {word.wordTranslate}
                <FavElementIcon position={"absolute"}/>
            </BackSide>
        </Flippy>
    );
};

const mapStateToProps = (state) => {
    const {showContent} = state;
    return {word: showContent.word}
};

export default connect(mapStateToProps)(FlashCards);