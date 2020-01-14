import React, {useState} from "react";
import {XCircle} from 'styled-icons/boxicons-solid/XCircle';
import {XCircle as BlankCircle} from 'styled-icons/boxicons-regular/XCircle';
import styled from "styled-components";
import {connect, useDispatch} from "react-redux";
import {setActive, setDeleted} from "../../../WordsToRenderSlice";
import {bookmarkType as Type} from "../../../../topElements/bookmarks/BookmarkType";

const DeleteElementIcon = (props) => {
    const [hover, setHover] = useState(false);
    const dispatch = useDispatch();

    const onMouseEnterHandler = () => {
        setHover(true);
    };

    const onMouseLeaveHandler = () => {
        setHover(false);

    };

    const deleteNavigationWord = (e) => {
        // e.currentTarget.parentElement.parentElement.parentElement.remove();
        // dispatch(removeWord(props.word.wordName));

        if (props.bookmark === Type.FAV)
            dispatch(setActive({word: props.word, active: false}));

        if (props.bookmark === Type.EXAMPLES)
            dispatch(setDeleted({word: props.word, deleted: true}));
    };


    const selectIcon = () => {
        return hover ? XCircle : BlankCircle;
    };

    const DeleteElementIcon = styled(selectIcon())`
          display: flex;
          color: #dc3545;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          right: 5px;
          transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
        `;

    return (
        <DeleteElementIcon onMouseEnter={onMouseEnterHandler}
                           onMouseLeave={onMouseLeaveHandler}
                           onClick={e => deleteNavigationWord(e)}
                           title={"Delete word"}/>
    );

};

const mapStateToProps = (state) => {
    const {bookmark} = state;
    const {wordsToRender} = state;
    return {
        bookmark: bookmark,
        words: wordsToRender
    }
};

export default connect(mapStateToProps)(DeleteElementIcon);