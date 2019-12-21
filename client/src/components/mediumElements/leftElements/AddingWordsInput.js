import React from "react";
import Colors from "../../topElements/Colors";


class AddingWordsInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const style = {
            display: "flex",
            width: '275px',
            height: "56.6px",
            flexGrow: '1',
            backgroundColor: Colors.DEFAULT_GREY
        };

        return (
            <div id={this.props.id} className={this.props.className} style={style}>
            </div>
        );
    }
}

export default AddingWordsInput;