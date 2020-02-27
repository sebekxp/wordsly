import React from 'react';
// noinspection ES6CheckImport
import { withRouter } from 'react-router-dom';
import { Circle } from 'styled-icons/fa-regular/Circle';
import { CheckCircle } from 'styled-icons/boxicons-solid/CheckCircle';
import { connect } from 'react-redux';
import { setKnowWord } from '../../../../../redux/wordsToRenderReducer';
import { updateUserWords } from '../../../../../actions/users/updateUserWords';
import { GreenCircleIcon } from './BlankCircleIcon.style';

const BlankCircleIcon = ({ word, hover, updateUserWords, auth, setKnowWord }) => {
    const blank = !word.knowWord;

    const updateProgBar = () => {
        setKnowWord({ word, knowWord: !word.knowWord });
        updateUserWords(auth.user.id, word, 'knowWord');
    };

    const selectIcon = () => {
        return blank ? Circle : CheckCircle;
    };

    return (
        <GreenCircleIcon
            hover={hover}
            as={selectIcon()}
            onClick={e => updateProgBar(e)}
            title="Mark as known word"
        />
    );
};

const mapStateToProps = state => {
    const { auth } = state;

    return {
        auth
    };
};

export default connect(mapStateToProps, {
    updateUserWords,
    setKnowWord
})(withRouter(BlankCircleIcon));
