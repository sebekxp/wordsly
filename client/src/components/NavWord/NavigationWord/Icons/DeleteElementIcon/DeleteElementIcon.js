import React, { useState } from 'react';
import { XCircle } from 'styled-icons/boxicons-solid/XCircle';
import { XCircle as BlankCircle } from 'styled-icons/boxicons-regular/XCircle';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setActive, setDeleted } from '../../../../../redux/wordsToRenderReducer';
import { bookmarkType as Type } from '../../../../utils/BookmarkType';
import Colors from '../../../../utils/Colors';
import { updateUserWords } from '../../../../../actions/users/updateUserWords';
// noinspection ES6CheckImport
import { withRouter } from 'react-router-dom';

const DeleteElementIcon = ({
                               word,
                               bookmark,
                               auth,
                               setActive,
                               setDeleted,
                               updateUserWords
                           }) => {
    const [hover, setHover] = useState(false);

    const onMouseEnterHandler = () => {
        setHover(true);
    };

    const onMouseLeaveHandler = () => {
        setHover(false);

    };

    const deleteNavigationWord = () => {
        updateUserWords(auth.user.id, word, 'deleted');

        if (bookmark === Type.FAV)
            setActive({ word, active: false });

        if (bookmark === Type.EXAMPLES)
            setDeleted({ word, deleted: true });
    };


    const selectIcon = () => {
        return hover ? XCircle : BlankCircle;
    };

    const DeleteElementIconComponent = styled(selectIcon())`
          display: flex;
          color: ${Colors.DELETE_ELEM_ICON}
          width: 30px;
          height: 30px;
          border-radius: 50%;
          right: 5px;
          transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
        `;

    return (
        <DeleteElementIconComponent onMouseEnter={onMouseEnterHandler}
                                    onMouseLeave={onMouseLeaveHandler}
                                    onClick={e => deleteNavigationWord(e)}
                                    title="Delete word"/>
    );

};

const mapStateToProps = state => {
    const { bookmark } = state;
    const { auth } = state;
    return {
        bookmark,
        auth
    };
};

export default connect(
    mapStateToProps,
    {
        updateUserWords,
        setDeleted,
        setActive
    }
)(withRouter(DeleteElementIcon));