import React, { useState, useEffect } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { connect } from 'react-redux';
import FavElementIcon from '../NavWord/NavigationWord/Icons/FavElementIcon/FavElementIcon';
import { backSideStyle, flippyStyle, frontSideStyle } from './FlashCard.style';
import { wordProp } from '../utils/propTypes';

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

    return (
        <Flippy
            animationDuration={300}
            flipOnHover={false}
            flipDirection="vertical"
            isFlipped={flippy}
            style={flippyStyle}
        >
            <FrontSide style={frontSideStyle} onClick={handleClick}>
                {word.wordName}
                <FavElementIcon position="absolute" word={word} />
            </FrontSide>
            <BackSide style={backSideStyle} onClick={handleClick}>
                {word.wordTranslate}
                <FavElementIcon position="absolute" word={word} />
            </BackSide>
        </Flippy>
    );
};

FlashCards.propTypes = {
    word: wordProp.isRequired
};

const mapStateToProps = state => {
    const { wordsToRender } = state;

    return {
        word: wordsToRender.wordToShow
    };
};
export default connect(mapStateToProps)(FlashCards);
