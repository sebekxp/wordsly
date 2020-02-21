import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Colors from '../../Colors';
import { setBookmark } from '../../BookmarksContextSlice';


const BookmarksElement = ({ selected, bbTitle }) => {
    const dispatch = useDispatch();
    const [isSelected, setSelected] = useState(selected);

    const getColor = () => {
        return isSelected ?
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
        setSelected(!isSelected);
        dispatch(setBookmark(bbTitle));
    };

    return (
        <Wrapper onClick={handleClick}>
            {bbTitle}
        </Wrapper>
    );

};

export default BookmarksElement;