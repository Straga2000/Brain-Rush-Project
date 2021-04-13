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
        data.text = e.target.value === "" ? data.text : e.target.value;
        this.setState({data});
        this.props.onUpdate(this.state);
        //console.log(this.props.data);
    };

    onInputChange = () =>
    {
        const data = {...this.state.data};
        data.isSelected = true;
        this.setState({data});
        this.props.onUpdate(this.state);
        //console.log(this.props.data);
    };

    onInputUnchange = () => {
        const data = {...this.state.data};
        data.isSelected = false;
        this.setState({data});
        this.props.onUpdate(this.state);
    };

    onInputInit = (e) =>
    {
        e.target.value = this.state.data.text;
        //console.log(this.props.data);
    };

    render() {
        const {isSelected, text} = this.state.data;

        let inputElem = <InputGroup className = "p-0 border-0 w-100 input-group-sm" onMouseLeave = {this.onInputUnchange} onChange = {this.onTextChange} onClick={this.onInputInit}>
                            <FormControl className = "p-0 border-0 form-control" placeholder = {text} as = "textarea"/>
                        </InputGroup>;

        let textElem = <Card.Title className="p-0 border-0 w-100" onMouseEnter={this.onInputChange} onMouseLeave={this.onInputUnchange}>
            {renderConditional(<small className={"font-weight-light"}>{text}</small>,
                               <small className={"font-weight-light"}>Write something...</small>, (text !== ""))}
                       </Card.Title>;

        return (
            <React.Fragment>
                {isSelected === false ? textElem : inputElem}
            </React.Fragment>
        );
    }
}