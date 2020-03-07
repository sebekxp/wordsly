import React from 'react';
import { connect } from 'react-redux';
import BlankCircleIcon from './Icons/BlankCircleIcon';
import DeleteElemIcon from './Icons/DeleteElementIcon';
import FavElementIcon from './Icons/FavElementIcon';
import { setWordToShow } from '../../../redux/wordsToRenderReducer';
import { IconWrapper, NavigationWordComponent, WordName } from './NavigationWord.style';
import { wordProp } from '../../utils/propTypes';

// TODO Delete word form list hide it only fix it / WordName focus color
const NavigationWord = ({ word, setWordToShowAction }) => {
    console.log('render');
    const { wordName } = word;

    const clickMouseAndDisplayWordContent = evt => {
        setWordToShowAction(evt.target.innerText);
    };

    return (
        !word.deleted && (
            <NavigationWordComponent
                onClick={clickMouseAndDisplayWordContent}
                className="navigation-word"
            >
                <BlankCircleIcon word={word} />
                <WordName name={wordName}>
                    <span>{wordName}</span>
                    <IconWrapper>
                        <FavElementIcon word={word} />
                        <DeleteElemIcon word={word} />
                    </IconWrapper>
                </WordName>
            </NavigationWordComponent>
        )
    );
};

NavigationWord.propTypes = {
    word: wordProp.isRequired
};

// use connect to upgrade performance
export default connect(null, { setWordToShowAction: setWordToShow })(NavigationWord);
