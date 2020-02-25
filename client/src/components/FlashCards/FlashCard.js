import React, { useState, useEffect } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { connect } from 'react-redux';
import FavElementIcon from '../NavWord/NavigationWord/Icons/FavElementIcon/FavElementIcon';
import Colors from '../utils/Colors';

const FlashCards = ({ word }) => {
    const [flippy, changeFlip] = useState(false);

    const handleClick = () => {
        changeFlip(!flippy);
    };

    useEffect(() => {

        const handleUserKeyPress = event => {
            const { keyCode } = event;

            if (keyCode === 32) {
                changeFlip(!flippy);
            }
        };
        window.addEventListener('keyup', handleUserKeyPress);

        return () => {
            window.removeEventListener('keyup', handleUserKeyPress);
        };
    });


    const flippyStyle = {
        width: '600px',
        height: '300px',
        borderRadius: '10px',
        padding: '0',
        margin: '0 auto',
        marginTop: '50px'
    };


    const frontSideStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '500',
        fontSize: '45px',
        borderRadius: '10px',
        boxShadow: Colors.BOX_SHADOW,
        backgroundColor: Colors.EXAMPLES_BACKGROUND
    };

    const backSideStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '500',
        fontSize: '45px',
        borderRadius: '10px',
        boxShadow: Colors.BOX_SHADOW,
        backgroundColor: Colors.EXAMPLES_BACKGROUND
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
                <FavElementIcon position="absolute" word={word}/>
            </FrontSide>
            <BackSide style={backSideStyle} onClick={handleClick}>
                {word.wordTranslate}
                <FavElementIcon position="absolute"/>
            </BackSide>
        </Flippy>
    );
};

const mapStateToProps = (state) => {
    const { wordsToRender } = state;

    return {
        word: wordsToRender.wordToShow
    };
};
export default connect(mapStateToProps)(FlashCards);