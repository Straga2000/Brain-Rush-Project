import React from 'react';
import Object from "./Templates/Object";

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import {renderConditional} from "../Scripts/reactUtilities";


export type IOElementType = {
    isSelected : boolean,
    text : string,
    updateElement : Function
}

export default class IOElement extends Object{
    constructor(props : IOElementType) {

        super({data : props, id : ""});
        /*if(props === undefined)
            this.state.data = {isSelected: false, text: ""};*/
    }

    onTextChange = (e : any) =>
    {
        ///trebuie sa suprascriem elementul
        const newtext = e.target.value;
        const newValue : IOElementType = {isSelected : false, text : newtext, updateElement : super.getState().data.updateElement};
        console.log(newtext);
        super.setState({data : newValue});
        this.state.data.updateElement(newValue); ///TODO corectat cacatul asta, cred ca facem fara mostenire oop ca e groaznic
    };

    onInputChange = () =>
    {super.setState({data : {isSelected : true}});};

    onInputInit = (e: any) =>
    {e.target.value = super.getState().data.text;};

    render() {
        const {isSelected, text} = super.getState().data;

        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        let inputElem = <InputGroup size="sm" className="m-0">
            <FormControl
                as = "textarea"
                aria-label="Medium"
                aria-describedby="inputGroup-sizing-sm"
                onBlur={this.onTextChange}
                onClick={this.onInputInit}/>
        </InputGroup>;

        let textElem = <p className="text-left m-0" onClick={this.onInputChange}>{renderConditional(text, "Write something...", (text !== ""))}</p>;

        return (
            <React.Fragment>
                {isSelected === false ? textElem : inputElem}
            </React.Fragment>
        );
    }
}