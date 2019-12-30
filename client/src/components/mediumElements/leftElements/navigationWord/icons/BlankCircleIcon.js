import React, {useState, useContext, useEffect} from "react";
import {Circle} from 'styled-icons/fa-regular/Circle';
import {CheckCircle} from 'styled-icons/boxicons-solid/CheckCircle';

import styled from "styled-components";
import {ProgressBarContext} from "../../../../WordContainer";

const BlankCircleIcon = (props) => {

    const [blank, setBlank] = useState(true);
    const ctx = useContext(ProgressBarContext);

    // const handleClick = () => {
    //     setBlank(!blank);
    //     updateProgBar();
    // };

    useEffect(() => {
        // updateProgBar();
    }, []);

    const updateProgBar = ()=> {
        if (blank)
            ctx.setKnownWord(ctx.knownWord + 1);
        else
            ctx.setKnownWord(ctx.knownWord - 1);
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
        blank ?
            <BlankCircleIcon className={"filled-circle"}
                             onClick={()=> {setBlank(!blank)}}
                             title={"Mark as known word"}/>
            :
            <CheckCircleIcon onClick={()=> {setBlank(!blank)}}
                             title={"Mark as known word"}/>
    );
};

export default BlankCircleIcon;