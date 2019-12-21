import React from "react";
import Colors from "../../topElements/Colors";


class NavigationWordContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const style = {
            display: "flex",
            width: '275px',
            height: '446.8px',
            // height: "calc(100% - 56.6px)",
            border: "1px solid black",
            backgroundColor: Colors.BOOKMARKS_TEXT
        };

        return (
            <div id={this.props.id} className={this.props.className} style={style}>
            </div>
        );
    }
}

export default NavigationWordContainer;