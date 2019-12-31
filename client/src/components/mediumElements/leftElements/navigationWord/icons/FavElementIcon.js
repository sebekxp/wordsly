import React from "react";
import {Star} from "styled-icons/boxicons-solid/Star";
import {Star as BlankStar} from 'styled-icons/boxicons-regular/Star';

import styled from "styled-components";

class FavElementIcon extends React.Component {
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

        const FavElemIcon = styled(Star)`
            display: flex;
            color: #FFD700;   
        `;

        const FavElemIconBlank = styled(BlankStar)`
            display: flex;
            color: #FFD700;   
        `;


        return (
            this.state.isHover ?
                <FavElemIcon onMouseEnter={this.onMouseEnterHandler}
                             onMouseLeave={this.onMouseLeaveHandler}
                             title={"Add to favorites word"}
                             size={30}/>
                :
                <FavElemIconBlank onMouseEnter={this.onMouseEnterHandler}
                                  onMouseLeave={this.onMouseLeaveHandler}
                                  title={"Add to favorites word"}
                                  size={30}/>

        );
    }
}

export default FavElementIcon;