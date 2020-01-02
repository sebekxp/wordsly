import React from "react";
import styled from "styled-components";
import {Star} from "styled-icons/boxicons-solid/Star";
import {Star as BlankStar} from 'styled-icons/boxicons-regular/Star';

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

        const selectIcon = () => {
            return this.state.isHover ? Star : BlankStar;
        };

        const FavElemIcon = styled(selectIcon())`
            display: flex;
            color: #FFD700;   
        `;

        return (
            <FavElemIcon onMouseEnter={this.onMouseEnterHandler}
                         onMouseLeave={this.onMouseLeaveHandler}
                         title={"Add to favorites word"}
                         size={30}/>
        );
    }
}

export default FavElementIcon;