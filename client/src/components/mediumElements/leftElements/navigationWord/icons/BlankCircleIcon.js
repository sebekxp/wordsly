import React from "react";
import styled from "styled-components";
import {Circle} from 'styled-icons/fa-regular/Circle';
import {CheckCircle} from 'styled-icons/boxicons-solid/CheckCircle';
import {useDispatch} from "react-redux";
import {decrementKnownWord, incrementKnownWord} from "../../../../topElements/progressBar/ProgressBarSlice";
import Popup from "../../../../popup/Popup";
import {fetchAndUpdateKnowWord, setKnowWord} from "../../../WordsToRenderSlice";
import Colors from "../../../../Colors";
import {store} from "../../../../../App";


const BlankCircleIcon = (props) => {
    const blank = !props.word.knowWord;
    // const [openPopup, setOpenPopup] = useState(false);
    // const [cords, setCords] = useState({x: 0, y: 0});

    const dispatch = useDispatch();

    const selectText = () => {
        return blank ? "Set as known word" : "Set as unknown word";
    };

    const updateProgBar = (e) => {
        // setOpenPopup(true);
        // setCords({x: e.screenX, y: e.screenY});
        // dispatch(setKnowWord({word: props.word, knowWord: !props.word.knowWord}));
        store.dispatch(fetchAndUpdateKnowWord({word: props.word, knowWord: !props.word.knowWord}));
        blank ? dispatch(incrementKnownWord()) : dispatch(decrementKnownWord());
    };

    const selectIcon = () => {
        return blank ? Circle : CheckCircle
    };

    const setColor = () => {
        return props.hover ? Colors.NAVIGATION_WORD_BACKGROUND_HOVER :
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
                title={"Mark as known word"}/>
            {/*<Popup open={openPopup} x={cords.x} y={cords.y}>*/}
            {/*    {selectText()}*/}
            {/*</Popup>*/}
        </>
    );
};

export default BlankCircleIcon;