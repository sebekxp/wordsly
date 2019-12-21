import React from 'react';
import Colors from "../Colors";


class BookmarksElement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.selected
        };
    }

    handleClick = () => {
        this.setState({
            selected: !this.state.selected
        })
    };

    render() {

        const style = {
            width: '135px',
            // height: '55.3px',
            textAlign: "center",
            lineHeight: "56.6px",
            color: Colors.BOOKMARKS_TEXT,
            backgroundColor: this.state.selected ?
                Colors.BOOKMARKS_ELEMENT_SELECTED_BACKGROUND :
                Colors.BOOKMARKS_ELEMENT_BACKGROUND
        };

        return (
            <div id={this.props.id} className={this.props.className} style={style} onClick={this.handleClick}>
                {this.props.bbTitle}
            </div>
        );
    }
}

export default BookmarksElement;