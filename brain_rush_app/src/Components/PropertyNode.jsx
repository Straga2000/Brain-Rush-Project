import React, {Component} from 'react';
import PropertyElement from "./Templates/PropertyElement";
import Button from "react-bootstrap/Button";

export default class PropertyNode extends Component {

    state = {
        data : this.props.data,
        id : this.props.data
    };

    updateState = () => {

    };

    createPropertyNode = () => {
      const data = this.state.data;
      data.propertyList.handleObjectCreate(data.propertyList.getNewID());

      this.setState({data});
      this.props.onUpdate(this.state);
    };

    printPropertyNode = (elem) => {
        return <PropertyElement term = {elem.term} def = {elem.def}/>
    };

    render() {
        const {propertyList} = this.state.data.propertyList;
        return (
            <div>
                <h1>Properties</h1>
                {
                    propertyList.ListOfObjects.map((elem) => this.printPropertyNode(elem))
                }
                <Button className="float-left mt-3 btn-sm" variant="success" onClick={this.createPropertyNode}>Add property</Button>
            </div>
        );
    }
}