import React, {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import uuid from 'uuid'

const Popup = ({open, children, x, y}) => {
    const target = useRef();
    const [shouldRender, setShouldRender] = useState(true);
    const id = uuid();

    useEffect(() => {
        let timer = setTimeout(() => {
            if (open)
                setShouldRender(false);
        }, 800);

        return () => {
            clearTimeout(timer);
        }
    }, [open]);


    const Popup = styled.div`
       background-color: #555;
       position: absolute;
       padding: 7px 7px;
       border-radius: 6px;
       animation: fadeIn 0.6s;
       color: #ffffff;
       top: ${y}px;
       left: ${x}px;

          &::after {
            content: "";
            position: absolute;
            top: 30%;
            left: -5%;
            margin-left: -7px;
            border-width: 8px;
            border-style: solid;
            border-color: transparent #555 transparent transparent;
        }
     `;

    return (
        (open && shouldRender) &&
        ReactDOM.createPortal(
            <Popup id={id} ref={target}>
                {children}
            </Popup>, document.body)
    );
};

export default Popup;