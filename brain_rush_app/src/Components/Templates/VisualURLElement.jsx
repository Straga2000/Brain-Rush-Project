import React, {Component} from 'react';
import Image from "react-bootstrap/Image";
import IOElement from "./IOElement";
import {renderConditional} from "../../Scripts/reactUtilities";

export default class VisualURLElement extends Component {

    state = {
        data: this.props.data,
        id: this.props.id
    };

    updateLink = (newState) => {
        const data = {...this.state.data};
        data.url = newState;
        this.setState({data});
        this.props.onUpdate(this.state);
        ///console.log(data.url.data);
    };

    updateVisibility = (e, value) => {
        e.target.hidden = !value;

        const data = {...this.state.data};
        data.isVisible = value;

        this.setState({data});
        this.props.onUpdate(this.state);
    };

    render() {
        const url = this.state.data.url;
        return (
            <div>
                <Image src={url.data.text} onError = {(e) => this.updateVisibility(e, false)}
                                           onLoad = {(e) => this.updateVisibility(e, true)} fluid/>

                <IOElement data = {url.data} id = {url.id} key = {url.id.toString()} onUpdate={(newState) => this.updateLink(newState)}/>
            </div>
        );
    }
}