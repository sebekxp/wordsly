import React, {useContext} from "react";
import {Circle} from 'styled-icons/fa-regular/Circle';
import {CheckCircle} from 'styled-icons/boxicons-solid/CheckCircle';

import styled from "styled-components";
import {ProgressBarContext} from "../../../../WordContainer";
import {BlankCircleIconContext} from "../NavigationWord";

const BlankCircleIcon = () => {
    const ctx = useContext(ProgressBarContext);
    const ctxBlank = useContext(BlankCircleIconContext);

    const updateProgBar = () => {
        if (ctxBlank.blank)
            ctx.setKnownWord(ctx.knownWord + 1);
        else
            ctx.setKnownWord(ctx.knownWord - 1);

        ctxBlank.setBlank(!ctxBlank.blank);
    };

    const BlankCircleIcon = styled(Circle)`
            color: #28a745;
            padding: 12px 12px;
            width: 53.59px;
            height: 53.9px;
            margin-right: 3px;
            border-radius: 5px;
            background-color: rgb(215, 215, 215);
        `;

    const CheckCircleIcon = styled(CheckCircle)`
            color: #28a745;
            padding: 12px 12px;
            width: 53.59px;
            height: 53.9px;
            margin-right: 3px;
            border-radius: 5px;
            background-color: rgb(215, 215, 215);
        `;

    return (
        ctxBlank.blank ?
            <BlankCircleIcon className={"filled-circle"}
                             onClick={updateProgBar}
                             title={"Mark as known word"}/>
            :
            <CheckCircleIcon onClick={updateProgBar}
                             title={"Mark as known word"}/>
    );
};

export default BlankCircleIcon;