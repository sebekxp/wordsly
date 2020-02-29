import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import BlankCircleIcon from './Icons/BlankCircleIcon';
import DeleteElemIcon from './Icons/DeleteElementIcon';
import FavElementIcon from './Icons/FavElementIcon';
import { setWordToShow } from '../../../redux/wordsToRenderReducer';
import { IconWrapper, NavigationWordComponent, WordName } from './NavigationWord.style';
import { wordProp } from '../../utils/propTypes';
// TODO Delete word form list hide it only fix it
const NavigationWord = ({ words, word, name, wordToShow }) => {
    const [wordObj, setWordObj] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setWordObj(word);
    }, [word]);

    const clickMouseAndDisplayWordContent = evt => {
        // TODO filter
        for (let i = 0; i < words.length; i++) {
            if (words[i].wordName === evt.target.innerText) {
                dispatch(setWordToShow(words[i]));
                break;
            }
        }
    };

    const handleMouseOver = evt => {
        for (let i = 0; i < words.length; i++) {
            if (words[i].wordName === evt.target.innerText) {
                setWordObj(words[i]);
                break;
            }
        }
    };

    return (
        <NavigationWordComponent
            onClick={event => clickMouseAndDisplayWordContent(event)}
            onMouseOver={e => handleMouseOver(e)}
            onFocus={e => handleMouseOver(e)}
            className="navigation-word"
        >
            <BlankCircleIcon word={wordObj} />
            <WordName name={name} wordName={wordToShow.wordName}>
                <span>{name}</span>
                <IconWrapper>
                    <FavElementIcon word={wordObj} position="relative" />
                    <DeleteElemIcon word={wordObj} />
                </IconWrapper>
            </WordName>
        </NavigationWordComponent>
    );
};

NavigationWord.propTypes = {
    words: PropTypes.arrayOf(wordProp.isRequired).isRequired,
    word: wordProp.isRequired,
    name: PropTypes.string.isRequired,
    wordToShow: wordProp.isRequired
};

const mapStateToProps = state => {
    const { wordsToRender } = state;

    return {
        wordToShow: wordsToRender.wordToShow
    };
};

export default connect(mapStateToProps)(NavigationWord);
