import React, {useState} from "react";
import styled from "styled-components";
import {Star} from "styled-icons/boxicons-solid/Star";
import {Star as BlankStar} from 'styled-icons/boxicons-regular/Star';
import {connect, useDispatch} from "react-redux";
import {addFavWord} from "../../../../topElements/bookmarks/favorites/FavoritesWordSlice";


const FavElementIcon = (props) => {
    const [hover, setHover] = useState(false);
    const dispatch = useDispatch();

    const onMouseEnterHandler = () => {
        setHover(true);
    };

    const onMouseLeaveHandler = () => {
        setHover(false);
    };

    const handleClick = (e) => {
        dispatch(addFavWord(props.word));
        e.stopPropagation();
    };

    const selectIcon = () => {
        return hover ? Star : BlankStar;
    };

    const FavElemIcon = styled(selectIcon())`
            position: ${props.position};
            top: 0;
            right: 0;
            display: flex;
            color: #FFD700;   
    `;

    return (
        <FavElemIcon onMouseEnter={onMouseEnterHandler}
                     onMouseLeave={onMouseLeaveHandler}
                     onClick={e => handleClick(e)}
                     title={"Add to favorites word"}
                     size={30}/>
    );
};

const mapStateToProps = (state) => {
    const {favWordsToRender} = state;
    return {favWords: favWordsToRender.favWords}
};

export default connect(mapStateToProps)(FavElementIcon);