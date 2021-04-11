import React, {Component} from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";

import {renderConditional} from "../../Scripts/reactUtilities";

export default class IOElement extends Component{

    state = {
        data : this.props.data,
        id : this.props.id
    };

    onTextChange = (e) =>
    {
        const data = {...this.state.data};
        data.text = e.target.value;
        data.isSelected = false;
        this.setState({data : data});
        this.props.onUpdate(this.state);
        //console.log(this.props.data);
    };

    onInputChange = () =>
    {
        const data = {...this.state.data};
        data.isSelected = true;
        this.setState({data});
        //console.log(this.props.data);
    };

    onInputInit = (e) =>
    {
        e.target.value = this.state.data.text;
        //console.log(this.props.data);
    };

    render() {
        const {isSelected, text} = this.state.data;

        let inputElem = <InputGroup  className = "p-0 border-0" onBlur={this.onTextChange} onClick={this.onInputInit}>
                            <FormControl className = "p-0 border-0" placeholder = {text} as = "textarea"/>
                        </InputGroup>;

        let textElem = <Card body className="p-0 border-0" onClick={this.onInputChange}>{renderConditional(text, "Write something...", (text !== ""))}</Card>;

        return (
            <React.Fragment>
                {isSelected === false ? textElem : inputElem}
            </React.Fragment>
        );
    }
}