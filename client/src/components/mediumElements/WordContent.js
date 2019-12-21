import React from "react";


class WordContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const style = {
            display: "flex",
            width: '100%',
            // height: '503.4px',
            // height: "calc(100% - (275px))px",
            backgroundColor: "pink"
        };

        return (
            <div id={this.props.id} className={this.props.className} style={style}>
            </div>
        );
    }
}

export default WordContent;