import React, {useState} from "react";
import styled from "styled-components";
import {Circle} from 'styled-icons/fa-regular/Circle';
import {CheckCircle} from 'styled-icons/boxicons-solid/CheckCircle';
import {useDispatch} from "react-redux";
import {decrementKnownWord, incrementKnownWord} from "../../../../topElements/progressBar/ProgressBarSlice";


const BlankCircleIcon = () => {
    const [blank, setBlank] = useState(true);
    const dispatch = useDispatch();

    const updateProgBar = () => {
        blank ? dispatch(incrementKnownWord()) : dispatch(decrementKnownWord());
        setBlank(!blank);
    };

    const selectIcon = () => {
        return blank ? Circle : CheckCircle
    };

    const GreenCircleIcon = styled(selectIcon())`
        color: #28a745;
        padding: 12px 12px;
        width: 53.59px;
        height: 53.9px;
        margin-right: 3px;
        border-radius: 5px;
        background-color: rgb(215, 215, 215);
    `;

    return (
        <GreenCircleIcon
            onClick={updateProgBar}
            title={"Mark as known word"}/>
    );
};

export default BlankCircleIcon;