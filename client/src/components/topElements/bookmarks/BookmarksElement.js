import React, {useState} from 'react';
import styled from "styled-components";
import Colors from "../Colors";


const BookmarksElement = (props) => {
    const [selected, setSelected] = useState(props.selected);

    const getColor = () => {
        return selected ?
            Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND :
            Colors.BOOKMARKS_ELEMENT_BACKGROUND
    };

    const Wrapper = styled.div`
        width: 135px;
        text-align: center;
        line-height: 56.6px;
        color: ${Colors.BOOKMARKS_TEXT};
        background-color: ${getColor()}
    `;

    return (
        <Wrapper onClick={() => {
            setSelected(!selected);
        }}>
            {props.bbTitle}
        </Wrapper>
    );

};

export default BookmarksElement;