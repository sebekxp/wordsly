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

        const DeleteElementIcon = styled(XCircle)`
          display: flex;
          color: #dc3545;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          right: 5px;
          transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
        `;

        const DeleteElementIconBlank = styled(BlankCircle)`
          display: flex;
          color: #dc3545;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          right: 5px;
          transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
        `;

        return (
            this.state.isHover ?
                <DeleteElementIcon onMouseEnter={this.onMouseEnterHandler}
                                   onMouseLeave={this.onMouseLeaveHandler}
                                   title={"Delete word"}/>
                :
                <DeleteElementIconBlank onMouseEnter={this.onMouseEnterHandler}
                                        onMouseLeave={this.onMouseLeaveHandler}
                                        title={"Delete word"}/>
        );
    }
}

export default DeleteElementIcon;