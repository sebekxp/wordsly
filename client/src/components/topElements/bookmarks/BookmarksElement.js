import React from 'react';


const style = {
    width: '135px',
    height: '55.3px',
    backgroundColor: "red",
    textAlign: "center",
    lineHeight: "55.3px"
};

const BookmarksElement = (props) => {
    return (
        <div id={props.id} className={props.className} style={style}>{props.bbTitle}</div>
    );
};

export default BookmarksElement;