import React, {useState} from "react";
import styled from "styled-components";
import {Circle} from 'styled-icons/fa-regular/Circle';
import {CheckCircle} from 'styled-icons/boxicons-solid/CheckCircle';
import {useDispatch} from "react-redux";
import {decrementKnownWord, incrementKnownWord} from "../../../../topElements/progressBar/ProgressBarSlice";
import Popup from "../../../../Popup/Popup";


const BlankCircleIcon = (props) => {
    const [blank, setBlank] = useState(true);
    const [openPopup, setOpenPopup] = useState(false);
    const [cords, setCords] = useState({x: 0, y: 0});
    const dispatch = useDispatch();

    const selectText = () => {
        return blank ? "Set as known word" : "Set as unknown word";
    };

    const updateProgBar = (e) => {
        setOpenPopup(true);
        setCords({x: e.screenX, y: e.screenY});
        blank ? dispatch(incrementKnownWord()) : dispatch(decrementKnownWord());
        setBlank(!blank);
    };

    const selectIcon = () => {
        return blank ? Circle : CheckCircle
    };

    const setColor = () => {
        return props.hover ? "#a2a5a2" : "rgb(215, 215, 215)";
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
                title={"Mark as known word"}/>
            {/*<Popup open={openPopup} x={cords.x} y={cords.y}>*/}
            {/*    {selectText()}*/}
            {/*</Popup>*/}
        </>
    );
};

export default BlankCircleIcon;