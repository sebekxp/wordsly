import React from 'react';
import styled from 'styled-components';
import { Circle } from 'styled-icons/fa-regular/Circle';
import { CheckCircle } from 'styled-icons/boxicons-solid/CheckCircle';
import { connect } from 'react-redux';
import { decrementKnownWord, incrementKnownWord } from '../../../../topElements/progressBar/ProgressBarSlice';
import { setKnowWord } from '../../../WordsToRenderSlice';
import Colors from '../../../../Colors';
// noinspection ES6CheckImport
import { withRouter } from 'react-router-dom';
import { updateUserWords } from '../../../../auth/actions/updateUserWords';


const BlankCircleIcon = ({
                             word,
                             hover,
                             updateUserWords,
                             auth,
                             setKnowWord,
                             incrementKnownWord,
                             decrementKnownWord
                         }) => {
    const blank = !word.knowWord;

    const updateProgBar = () => {
        setKnowWord({ word, knowWord: !word.knowWord });
        updateUserWords(auth.user.id, word, 'knowWord');

        if (blank)
            incrementKnownWord();
        else
            decrementKnownWord();
    };

    const selectIcon = () => {
        return blank ? Circle : CheckCircle;
    };

    const setColor = () => {
        return hover ? Colors.NAVIGATION_WORD_BACKGROUND_HOVER :
            Colors.NAVIGATION_WORD_BACKGROUND;
    };

    const GreenCircleIcon = styled(selectIcon())`
        color: #28a745;
        padding: 12px 12px;
        width: 53.59px;
        height: 53.9px;
        margin-right: 3px;
        border-radius: 5px;
        background-color: ${setColor()}
    `;

    return (
        <>
            <GreenCircleIcon
                onClick={e => updateProgBar(e)}
                title="Mark as known word"/>
        </>
    );
};


const mapStateToProps = state => {
    const { auth } = state;

    return {
        auth
    };
};

export default connect(
    mapStateToProps,
    {
        updateUserWords,
        setKnowWord,
        decrementKnownWord,
        incrementKnownWord
    }
)(withRouter(BlankCircleIcon));