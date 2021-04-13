import React, {Component} from 'react';
import IOElement from "./IOElement";

export default class PropertyElement extends Component {
    state = {
        data : this.props.data,
        id : this.props.id
    };

    updateProperty = (propertyName, newState) => {
        const data = this.state.data;
        data[propertyName] = newState;

        this.setState({data});
        this.props.onUpdate(this.state);
    };

    render() {
        const {term, def} = this.props.data;
        return (
            <div className="flex-row">
                <IOElement data = {term.data} id = {term.id} key = {term.id.toString()} onUpdate = {(newState) => this.updateProperty("",newState)}/> :
                <IOElement data = {def.data} id = {def.id} key = {def.id.toString()} onUpdate = {(newState) => this.updateProperty("",newState)}/>
            </div>
        );
    }
}