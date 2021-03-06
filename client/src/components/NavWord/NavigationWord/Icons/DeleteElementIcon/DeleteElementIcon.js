import React, { useState } from 'react';
import PropTypes from 'prop-types';
// noinspection ES6CheckImport
import { withRouter } from 'react-router-dom';
import { XCircle } from 'styled-icons/boxicons-solid/XCircle';
import { XCircle as BlankCircle } from 'styled-icons/boxicons-regular/XCircle';
import { connect } from 'react-redux';
import { setActive, setDeleted } from '../../../../../redux/wordsToRenderReducer';
import { bookmarkType as Type } from '../../../../utils/BookmarkType';
import { updateUserWords } from '../../../../../actions/users/updateUserWords';
import { DeleteElementIconComponent } from './DeleteElementIcon.style';
import { authProp, wordProp } from '../../../../utils/propTypes';

const DeleteElementIcon = ({ word, bookmark, auth, setActive, setDeleted, updateUserWords }) => {
    const [hover, setHover] = useState(false);

    const onMouseEnterHandler = () => {
        setHover(true);
    };

    const onMouseLeaveHandler = () => {
        setHover(false);
    };

    const deleteNavigationWord = () => {
        updateUserWords(auth.user.id, word, 'deleted');
        if (bookmark === Type.FAV) setActive({ word, active: false });
        if (bookmark === Type.EXAMPLES) setDeleted({ word, deleted: true });
    };

    const selectIcon = () => {
        return hover ? XCircle : BlankCircle;
    };

    return (
        <DeleteElementIconComponent
            as={selectIcon()}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
            onClick={deleteNavigationWord}
            title="Delete word"
        />
    );
};

DeleteElementIcon.propTypes = {
    word: PropTypes.oneOfType([wordProp, PropTypes.shape({})]).isRequired,
    bookmark: PropTypes.string.isRequired,
    auth: authProp.isRequired,
    setActive: PropTypes.func.isRequired,
    setDeleted: PropTypes.func.isRequired,
    updateUserWords: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { bookmark } = state;
    const { auth } = state;
    return {
        bookmark,
        auth
    };
};

export default connect(mapStateToProps, {
    updateUserWords,
    setDeleted,
    setActive
})(withRouter(DeleteElementIcon));
