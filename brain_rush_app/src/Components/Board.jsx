import React, {Component} from 'react';
import Button from "react-bootstrap/cjs/Button";

import VisualURLElement from "./Templates/VisualURLElement";
import HolderElement from "./Templates/HolderElement";
import IOElement from "./Templates/IOElement";
import VisualElement from "./Templates/VisualElement";
import TextNode from "./TextNode";
import VisualNode from "./VisualNode";

import List from "../Scripts/CRUD";
import DefaultState from "../Scripts/CreateDefaultState";

import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from "react-bootstrap/InputGroup";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";


export default class Board extends Component {

    DefState = new DefaultState();


    state = {
        IOElems : new List("IO"),
        NODElems : new List("NODES"),
        TextNodeList : new List("textnodes"),
        VisualNodeList: new List("visualnodes")
    };

    createTextNode = () => {
        const TextNodeList = this.state.TextNodeList;
        const text = this.DefState.getDefaultTextNode(TextNodeList.getNewID());

        TextNodeList.handleObjectCreate(text);
        this.setState({TextNodeList});
        //console.log(TextNodeList);
    };

    deleteTextNode = (foundState) => {
        const TextNodeList = this.state.TextNodeList;
        TextNodeList.handleObjectDelete(foundState);

        this.setState({TextNodeList});
        //console.log(TextNodeList.ListOfObjects.length)
    };

    updateTextNode = (newState) => {
      const TextNodeList = this.state.TextNodeList;
      TextNodeList.handleObjectUpdate(newState);

      console.log(TextNodeList.ListOfObjects);
      this.setState({TextNodeList});
    };

    printTextNode = (elem) => {
        return <TextNode data = {elem.data}
                         id = {elem.id}
                         key = {elem.id.toString()}
                         onDelete = {(foundState) => this.deleteTextNode(foundState)}
                         onUpdate = {(newState) => this.updateTextNode(newState)}/>
    };

    createNode = () => {
        const NODElems = this.state.NODElems;
        //console.log(this.state.NODElems);
        const info = this.DefState.getDefaultNode(NODElems.getNewID());

        NODElems.handleObjectCreate(info); ///aici trb sa intoarcem in crud obiectul

        this.setState({NODElems});
        //console.log(info);
    };

    render() {

        const navBar = <Navbar bg="dark" variant="dark">
                            <Navbar.Brand>BrainRush</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link onClick ={this.createNode}>Get note</Nav.Link>
                                <Nav.Link onClick ={this.createTextNode}>Text</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                            {/*<Form inline>*/}
                            {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                            {/*    <Button variant="outline-info">Search</Button>*/}
                            {/*</Form>*/}
                      </Navbar>;

        const NODElems = this.state.NODElems;
        const TextNodeList = this.state.TextNodeList;
        //console.log(NODElems);

        return (
            <div className={"w-100"}>
                {/*<Button onClick={this.createNode}>New Note</Button>*/}
                {navBar}
                {
                    NODElems.ListOfObjects.map((elem) =>
                        <HolderElement data = {elem.data} id = {elem.id} key = {elem.id.toString()} onDelete = {(newState) =>{NODElems.handleObjectDelete(newState)}}>
                            <div>We are good</div>
                        </HolderElement>)
                    //this.state.IOElems.ListOfObjects.map((elem) =>
                    //    <IOElement data = {elem.data} id = {elem.id} key = {elem.id.toString()} onUpdate={this.state.IOElems.handleObjectUpdate}></IOElement>)
                }
                {
                    TextNodeList.ListOfObjects.map((elem) => this.printTextNode(elem))
                }
            </div>
        );
    }
};