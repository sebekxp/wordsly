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

    handleClick = (e) => {
       e.stopPropagation();
    };

    render() {

        const selectIcon = () => {
            return this.state.isHover ? Star : BlankStar;
        };

        const FavElemIcon = styled(selectIcon())`
            position: ${this.props.position};
            top: 0;
            right: 0;
            display: flex;
            color: #FFD700;   
        `;

        return (
            <FavElemIcon onMouseEnter={this.onMouseEnterHandler}
                         onMouseLeave={this.onMouseLeaveHandler}
                         onClick={e=>this.handleClick(e)}
                         title={"Add to favorites word"}
                         size={30}/>
        );
    }
}

export default FavElementIcon;