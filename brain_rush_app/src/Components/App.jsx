import React, {Component} from 'react';
import Button from "react-bootstrap/cjs/Button";
import HolderElement from "./Templates/HolderElement";

import IOElement from "./Templates/IOElement";
import List from "../Scripts/CRUD";
import DefaultState from "../Scripts/CreateDefaultState";

import 'bootstrap/dist/css/bootstrap.min.css';

const DefState = new DefaultState();
class App extends Component {

    state = {
        IOElems : new List("IO"),
        NODElems : new List("NODES")
    }

    componentDidMount() {
        this.createNewNode();
    }

    createNewNode = () => {
        const info = DefState.getDefaultNode(this.state.NODElems.getNewID());
        const NODElems = this.state.NODElems.handleObjectCreate(info);
        this.setState({NODElems});
        console.log(info);
    }

    ///TODO use transitions for the notes https://react-bootstrap.netlify.app/utilities/transitions/
    ///Create a "Are u sure?" dialog with the user https://react-bootstrap.github.io/components/modal/
    ///https://reactjsexample.com/draw-a-line-between-two-elements-in-react/ lines between posts

    render() {

        const NODElems = this.state.NODElems.ListOfObjects;

        return (
            <div className={"w-100"}>

                <Button onClick={this.createNewNode}>New Note</Button>
                {
                    (NODElems !== undefined) ?
                        NODElems.map((elem) =>
                        <HolderElement data = {elem.data} id = {elem.id} key = {elem.id.toString()} IO = {elem.IO}>
                            <div>We are good</div>
                        </HolderElement>) : null

                    //this.state.IOElems.ListOfObjects.map((elem) =>
                    //    <IOElement data = {elem.data} id = {elem.id} key = {elem.id.toString()} onUpdate={this.state.IOElems.handleObjectUpdate}></IOElement>)
                }
            </div>
        );
    }
}

export default App;