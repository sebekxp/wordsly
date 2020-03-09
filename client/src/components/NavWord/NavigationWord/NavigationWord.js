import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BlankCircleIcon from './Icons/BlankCircleIcon';
import DeleteElemIcon from './Icons/DeleteElementIcon';
import FavElementIcon from './Icons/FavElementIcon';
import { setWordToShow } from '../../../redux/wordsToRenderReducer';
import { IconWrapper, NavigationWordComponent, WordName } from './NavigationWord.style';
import { wordProp } from '../../utils/propTypes';

// TODO Delete word form list hide it only fix it / WordName focus color
class NavigationWord extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { word, style, wordToShow, setWordToShowAction } = this.props;
        const { wordName } = word;

        const clickMouseAndDisplayWordContent = evt => {
            setWordToShowAction(evt.target.innerText);
        };

        return (
            !word.deleted && (
                <NavigationWordComponent
                    name={wordName}
                    wordName={wordToShow.wordName}
                    style={style}
                    onClick={clickMouseAndDisplayWordContent}
                    className="navigation-word"
                >
                    <BlankCircleIcon word={word} />
                    <WordName>
                        <span>{wordName}</span>
                        <IconWrapper>
                            <FavElementIcon word={word} />
                            <DeleteElemIcon word={word} />
                        </IconWrapper>
                    </WordName>
                </NavigationWordComponent>
            )
        );
    }
}

NavigationWord.propTypes = {
    word: wordProp.isRequired,
    setWordToShowAction: PropTypes.func.isRequired,
    wordToShow: wordProp.isRequired
};

const mapStateToProps = state => {
    const { wordsToRender } = state;

    return {
        wordToShow: wordsToRender.wordToShow
    };
};

// use connect to upgrade performance
export default connect(mapStateToProps, { setWordToShowAction: setWordToShow })(NavigationWord);
