import React from "react";
import NavigationWord from "./navigationWord/NavigationWord";
import {OBJWORDS as words} from "../../words";
import {ProgressBarContext} from "../../WordContainer";

export const NavigationWordContext = React.createContext(0);

class NavigationWordContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    //
    handleClick = (ctx) => {
        ctx.setNumWords(20);
    };



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
            <ProgressBarContext.Consumer>
                {ctx=>
                    <div id={this.props.id} className={this.props.className} style={style}>
                        {ctx.setNumWords(words.length)}
                        {
                            words.map((word, index) =>
                                <NavigationWord name={word.wordName} key={index}/>)
                        }

                    </div>
                }
            </ProgressBarContext.Consumer>

        );
    }
}

export default NavigationWordContainer;