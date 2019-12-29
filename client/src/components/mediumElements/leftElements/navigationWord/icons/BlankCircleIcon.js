import React from "react";
import {Circle} from 'styled-icons/fa-regular/Circle';
import {CheckCircle} from 'styled-icons/boxicons-solid/CheckCircle';

import styled from "styled-components";
import {ProgressBarContext} from "../../../../WordContainer";

class BlankCircleIcon extends React.Component {
    constructor(props) {
        super(props);
        this.blankCircleRef = React.createRef();
        this.state = {
            isBlank: true
        }
    }

    handleClick = () => {
        this.setState({isBlank: !this.state.isBlank});
    };

    render() {
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


            this.state.isBlank ?

                <BlankCircleIcon className={"filled-circle"}
                                 onClick={this.handleClick}
                                 title={"Mark as known word"}
                                 ref={this.blankCircleRef}/>

                :
                <CheckCircleIcon onClick={this.handleClick}
                                 title={"Mark as known word"}/>


        )
            ;
    }
}

export default BlankCircleIcon;