import React from "react";
import Colors from "../../topElements/Colors";
import NavigationWord from "./navigationWord/NavigationWord";


class NavigationWordContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const style = {
            display: "flex",
            width: '275px',
            flexDirection: "column",
            height: '446.8px',
            // height: "calc(100% - 56.6px)",
            border: "1px solid black",
            // backgroundColor: Colors.BOOKMARKS_TEXT,

            boxSizing: "border-box",
            backgroundColor: "#f1f1f1",
            overflow: "auto",
        };

        return (
            <div id={this.props.id} className={this.props.className} style={style}>
                <NavigationWord/>
                <NavigationWord/>
                <NavigationWord/>
                <NavigationWord/>
                <NavigationWord/>
                <NavigationWord/>
                <NavigationWord/>
                <NavigationWord/>
                <NavigationWord/>
                <NavigationWord/>
                <NavigationWord/>
                <NavigationWord/>
            </div>
        );
    }
}

export default NavigationWordContainer;