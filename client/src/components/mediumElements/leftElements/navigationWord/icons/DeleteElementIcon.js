import React, {useState} from "react";
import {XCircle} from 'styled-icons/boxicons-solid/XCircle';
import {XCircle as BlankCircle} from 'styled-icons/boxicons-regular/XCircle';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {removeWord} from "../../../WordsToRenderSlice";

const DeleteElementIcon = (props) => {
    const [hover, setHover] = useState(false);
    const wordName = props.word.wordName;
    const dispatch = useDispatch();

    const onMouseEnterHandler = () => {
        setHover(true);
    };

    const onMouseLeaveHandler = () => {
        setHover(false);

    };

    const deleteNavigationWord = (e) => {
        dispatch(removeWord(wordName));
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

export default DeleteElementIcon