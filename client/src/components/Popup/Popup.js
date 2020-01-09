import React, {useEffect} from "react";
import styled from "styled-components";

const Popup = (props) => {
    const target = React.createRef();

    useEffect(() => {
        setTimeout(() => {

            const popup = document.getElementById("popup");
            if (popup !== null)
                popup.remove();
        }, 800)
    });


    const Popup = styled.div`
       background-color: #555;
       position: absolute;
       padding: 7px 7px;
       border-radius: 6px;
       animation: fadeIn 0.6s;
       color: #ffffff;

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
        <Popup id={"popup"} ref={target}>
            {props.text}
        </Popup>
    );
};

export default Popup;