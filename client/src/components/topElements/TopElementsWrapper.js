import React from 'react';
import ProgressBar from "./progressBar/ProgressBar";
import BookmarksBar from "./bookmarks/BookmarksBar";
import Colors from "./Colors";

const style = {
    display: "flex",
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