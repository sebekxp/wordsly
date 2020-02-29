import React, { useState } from 'react';
import PropTypes from 'prop-types';
// noinspection ES6CheckImport
import { withRouter } from 'react-router-dom';
import { Star } from 'styled-icons/boxicons-solid/Star';
import { Star as BlankStar } from 'styled-icons/boxicons-regular/Star';
import { connect } from 'react-redux';
import { setActive } from '../../../../../redux/wordsToRenderReducer';
import { updateUserWords } from '../../../../../actions/users/updateUserWords';
import { FavElemIcon } from './FavElementIcon.style';
import { authProp, wordProp } from '../../../../utils/propTypes';

const FavElementIcon = ({ word, auth, setActive, updateUserWords }) => {
    const [hover, setHover] = useState(false);

    const onMouseEnterHandler = () => {
        setHover(true);
    };

    const onMouseLeaveHandler = () => {
        setHover(false);
    };

    const handleClick = e => {
        setActive({ word, active: true });
        updateUserWords(auth.user.id, word, 'active');
        e.stopPropagation();
    };

    const selectIcon = () => {
        return hover ? Star : BlankStar;
    };

    return (
        <FavElemIcon
            as={selectIcon()}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
            onClick={e => handleClick(e)}
            title="Add to favorites word"
            size={30}
        />
    );
};

FavElementIcon.propTypes = {
    word: PropTypes.oneOfType([wordProp, PropTypes.shape({})]).isRequired,
    auth: authProp.isRequired,
    updateUserWords: PropTypes.func.isRequired,
    setActive: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { auth } = state;

    return {
        auth
    };
};

export default connect(mapStateToProps, { updateUserWords, setActive })(withRouter(FavElementIcon));
