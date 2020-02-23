import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Colors from '../../Colors';
import { setBookmark } from '../../BookmarksContextSlice';
import { Button } from 'reactstrap';

const BookmarksElement = ({ selected, bbTitle }) => {
    const dispatch = useDispatch();
    const [isSelected, setSelected] = useState(selected);

    const getColor = () => {
        return isSelected ?
            Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND :
            Colors.BOOKMARKS_ELEMENT_BACKGROUND;
    };

    const style = {
        width: '135px',
        textAlign: 'center',
        lineHeight: '56.6px',
        color: 'white',
        backgroundColor: getColor()
    };
    const handleClick = () => {
        setSelected(!isSelected);
        dispatch(setBookmark(bbTitle));
    };

    return (
        <Button onClick={handleClick} style={style} color="secondary">
            {bbTitle}
        </Button>
    );

};

export default BookmarksElement;