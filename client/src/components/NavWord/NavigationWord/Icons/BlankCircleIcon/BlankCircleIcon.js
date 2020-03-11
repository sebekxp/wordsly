import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
// noinspection ES6CheckImport
import { withRouter } from 'react-router-dom';
import { Circle } from 'styled-icons/fa-regular/Circle';
import { CheckCircle } from 'styled-icons/boxicons-solid/CheckCircle';
import { connect } from 'react-redux';
import { setKnowWord } from '../../../../../redux/wordsToRenderReducer';
import { updateUserWords } from '../../../../../actions/users/updateUserWords';
import { GreenCircleIcon, Wrapper } from './BlankCircleIcon.style';
import { authProp, wordProp } from '../../../../utils/propTypes';

const BlankCircleIcon = memo(({ word, updateUserWords, auth, setKnowWord }) => {
    const [blank, setBlank] = useState(null);

    const updateProgBar = () => {
        setKnowWord({ word, knowWord: blank });
        setBlank(!blank);
        updateUserWords(auth.user.id, word, 'knowWord');
    };

    useEffect(() => {
        setBlank(!word.knowWord);
    }, [word.knowWord]);

    const selectIcon = () => {
        return blank ? Circle : CheckCircle;
    };

    return (
        <Wrapper>
            <GreenCircleIcon
                size={25}
                as={selectIcon()}
                onClick={updateProgBar}
                title="Mark as known word"
            />
        </Wrapper>
    );
});

BlankCircleIcon.propTypes = {
    word: PropTypes.oneOfType([wordProp, PropTypes.shape({})]).isRequired,
    updateUserWords: PropTypes.func.isRequired,
    auth: authProp.isRequired,
    setKnowWord: PropTypes.func.isRequired
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
