import React, {Component} from 'react';
import CreateDefaultState from "../Scripts/CreateDefaultState";
import Button from "react-bootstrap/Button";
import IOElement from "./Templates/IOElement";
import HolderElement from "./Templates/HolderElement";


export default class TextNode extends Component {

    defState = new CreateDefaultState();


    state = {
        data : this.props.data,
        id : this.props.id
    };

    createNewRef = () =>{
        const data = {...this.state.data};

        const ref = this.defState.getDefaultIO(data.refList.getNewID());
        data.refList.handleObjectCreate(ref);

        this.setState({data});
        this.props.onUpdate(this.state);
    };

    updateRef = (newState) => {
        const data = {...this.state.data};
        data.refList.handleObjectUpdate(newState);

        this.setState({data});
        this.props.onUpdate(this.state);
    };

    updateIOText = (newState) => {
        const data = {...this.state.data};
        data.text = newState;

        this.setState({data});
        this.props.onUpdate(this.state);
    };

    ///TODO regandeste delete element
    deleteElement = () => {
        this.props.onDelete(this.state);
    };

    updateHolderElement = (newState) => {
      const data = {...this.state.data};
      data.defNode = newState;

      this.setState({data});
      this.props.onUpdate(this.state);
    };

    render() {

        const {refList, defNode, text} = this.state.data;
        let counter = 0;

        return (
            <HolderElement data = {defNode.data} id = {defNode.id} key = {defNode.id.toString()} IO = {defNode.IOName}
                           onDelete = {this.deleteElement}
                           onUpdate = {(newState) => this.updateHolderElement(newState)}>

                <h4 className="text-primary">Notes:</h4>
                <IOElement data = {text.data} id = {text.id} key = {text.id.toString()} onUpdate={(newState) => this.updateIOText(newState)}/>

                {
                    refList.ListOfObjects.map((elem) =>
                        <div>
                            <h4 className="text-primary">url #{counter++}: </h4>
                            <IOElement data = {elem.data} id = {elem.id} key = {elem.id.toString()} onUpdate={(newState) => this.updateRef(newState)}/>
                        </div>)
                }

                <Button className="float-left mt-3 btn-sm" variant="success" onClick={this.createNewRef}>Add new reference</Button>

            </HolderElement>
        );
    }
}