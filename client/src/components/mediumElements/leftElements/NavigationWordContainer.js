import React from "react";
import NavigationWord from "./navigationWord/NavigationWord";
import {OBJWORDS as words} from "../../words";

export const NavigationWordContext = React.createContext(0);

class NavigationWordContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            KNOW_WORDS: 0,
            NUM_OF_WORDS: 0
        }
    }

    //
    // componentDidMount() {
    //     this.setState({
    //         KNOW_WORDS: window.document.querySelectorAll(".filled-circle").length,
    //         NUM_OF_WORDS: window.document.querySelectorAll('.navigation-word').length
    //     });
    //     console.log("elodidmount");
    // }
    //
    // handleClick = () => {
    //     this.setState({
    //         KNOW_WORDS: this.state.KNOW_WORDS + 10,
    //         NUM_OF_WORDS: this.state.NUM_OF_WORDS + 10
    //     });
    // };



    render() {

        const style = {
            display: "flex",
            width: '275px',
            flexDirection: "column",
            height: '446.8px',
            border: "1px solid black",
            boxSizing: "border-box",
            backgroundColor: "#f1f1f1",
            overflow: "auto",
        };

        return (
            <NavigationWordContext.Provider value={this.state.NUM_OF_WORDS}>
                <div id={this.props.id} className={this.props.className} style={style} onClick={this.handleClick}>
                    {this.state.NUM_OF_WORDS}
                    {
                        words.map((word, index) =>
                            <NavigationWord name={word.wordName} key={index}/>
                        )
                    }
                </div>
            </NavigationWordContext.Provider>

        );
    }
}

export default NavigationWordContainer;