import React from 'react';
import BookmarksElement from "./BookmarksElement";
import Colors from "../../../utils/Colors";


const bbStyle = {
    display: "flex",
    width: '68.75rem',
    padding: "0",
    backgroundColor: Colors.BOOKMARKS_BACKGROUND,
    borderRadius: "0 10px 0 0",

};

const BookmarksBar = (props) => {
    return (
        <div id="bookmarks-bar" className="bookmarks-bar" style={bbStyle}>
            <BookmarksElement id={"examples"} className={"examples"} bbTitle={"Examples"}/>
            <BookmarksElement id={"flash-cards"} className={"flash-cards"} bbTitle={"Flash Cards"}/>
            <BookmarksElement id={"favorites"} className={"favorites"} bbTitle={"Favorites"}/>
        </div>
    );
};

export default BookmarksBar;