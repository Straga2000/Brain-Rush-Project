import React, {Component} from 'react';
import VisualURLElement from "./Templates/VisualURLElement";
import IOElement from "./Templates/IOElement";
import Button from "react-bootstrap/Button";
import HolderElement from "./Templates/HolderElement";

export default class VisualNode extends Component {

    state = {
        data : this.props.data,
        id : this.props.id
    };

    updateVisualURL = (newState) => {
        const data = {...this.state.data};
        data.img = newState;

        this.setState({data});
        this.props.onUpdate(this.state);
    };

    updateHolderElement = (newState) => {
        const data = {...this.state.data};
        data.defNode = newState;

        this.setState({data});
        this.props.onUpdate(this.state);
    };

    deleteElement = () => {
        this.props.onDelete();
    };

    render() {

        const {img, defNode} = this.state.data;

        return (
                <HolderElement data = {defNode.data} id = {defNode.id} key = {defNode.id.toString()} IO = {defNode.IOName}
                               onDelete = {this.deleteElement}
                               onUpdate = {(newState) => this.updateHolderElement(newState)}>

                    <h4 className="text-primary">Visual Reference:</h4>

                    <VisualURLElement data={img.data} id = {img.id} key = {img.id.toString()} onUpdate = {(newState) => this.updateVisualURL(newState)}/>

                </HolderElement>);
    }
}