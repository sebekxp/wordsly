import React from 'react';
import ProgressBar from "../ProgressBar";
import BookmarksBar from "./bookmarks/BookmarksBar";

const style = {
    display: "flex"
};

const TopElementsWrapper = (props) => {
    return (
        <div style={style}>
            <ProgressBar/>
            <BookmarksBar/>
        </div>
    );
};

export default TopElementsWrapper;