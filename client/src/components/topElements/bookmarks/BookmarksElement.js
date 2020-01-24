import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../../Colors';
import { useDispatch } from 'react-redux';
import { setBookmark } from '../../BookmarksContextSlice';


const BookmarksElement = (props) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(props.selected);

    const getColor = () => {
        return selected ?
            Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND :
            Colors.BOOKMARKS_ELEMENT_BACKGROUND;
    };

    const Wrapper = styled.div`
        width: 135px;
        text-align: center;
        line-height: 56.6px;
        color: ${Colors.BOOKMARKS_TEXT};
        background-color: ${getColor()}
    `;

    const handleClick = () => {
        setSelected(!selected);
        dispatch(setBookmark(props.bbTitle));
    };

    return (
        <Wrapper onClick={handleClick}>
            {props.bbTitle}
        </Wrapper>
    );

};

export default BookmarksElement;