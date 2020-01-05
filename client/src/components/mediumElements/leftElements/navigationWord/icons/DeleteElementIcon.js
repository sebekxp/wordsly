import React from "react";
import {XCircle} from 'styled-icons/boxicons-solid/XCircle';
import {XCircle as BlankCircle} from 'styled-icons/boxicons-regular/XCircle';
import styled from "styled-components";


class DeleteElementIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false
        };
    }

    onMouseEnterHandler = () => {
        this.setState({
            isHover: true
        });
    };

    onMouseLeaveHandler = () => {
        this.setState({
            isHover: false
        });
    };

    render() {

        const selectIcon = () => {
            return this.state.isHover ? XCircle : BlankCircle;
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
            <DeleteElementIcon onMouseEnter={this.onMouseEnterHandler}
                               onMouseLeave={this.onMouseLeaveHandler}
                               title={"Delete word"}/>
        );
    }
}

export default DeleteElementIcon;