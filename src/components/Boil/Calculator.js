import React from "react";
import BoilingVer from "./BoilingVerdict";

export default class Calculator extends React.Component {
    state = {
        temparature : '',
    };

    handleFormInput = (e) => {
        this.setState({
            temparature: e.target.value
        });
    }

    render() {
        const {temparature} = this.state;
        return (
            <div>
                <fieldset>
                    <legend>Enter Temparature in Celsius</legend>
                    <input type="text" value={temparature} onChange={this.handleFormInput}/>
                </fieldset>
                <BoilingVer celsius={parseFloat(temparature)}/>
                <p>{temparature}</p>
                <p>{parseFloat(temparature)}</p>
            </div>
        );
    }
}