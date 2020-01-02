import React, {useContext} from "react";
import styled from "styled-components";
import {Circle} from 'styled-icons/fa-regular/Circle';
import {CheckCircle} from 'styled-icons/boxicons-solid/CheckCircle';
import {ProgressBarContext} from "../../../../WordContainer";
import {BlankCircleIconContext} from "../NavigationWord";

const BlankCircleIcon = () => {
    console.log("BlankCircleIcon");
    const ctx = useContext(ProgressBarContext);
    const ctxBlank = useContext(BlankCircleIconContext);

    const updateProgBar = () => {

        if (ctxBlank.blank)
            ctx.setKnownWord(ctx.knownWord + 1);
        else
            ctx.setKnownWord(ctx.knownWord - 1);

        ctxBlank.setBlank(!ctxBlank.blank);
    };

    const selectIcon = () => {
        console.log(ctxBlank.blank);
        return ctxBlank.blank ? Circle : CheckCircle
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