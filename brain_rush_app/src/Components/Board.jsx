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
        TextNodeList : new List("TextNodeList"),
        VisualNodeList: new List("VisualNodeList")
    };

    createArrayObj = (arrayName, defState) => {
        const arrObj = this.state[arrayName];
        const init = defState(arrObj.getNewID());

        arrObj.handleObjectCreate(init);

        const dict = {};
        dict[arrayName] = arrObj;

        this.setState(dict);
    };

    deleteArrayObj = (arrayName, foundState) => {
        const arrObj = this.state[arrayName];
        arrObj.handleObjectDelete(foundState);

        const dict = {};
        dict[arrayName] = arrObj;

        this.setState(dict);
    };

    updateArrayObj = (arrayName, newState) => {
      const arrayObj = this.state[arrayName];
      arrayObj.handleObjectUpdate(newState);

      const dict = {};
      dict[arrayName] = arrayObj;

      this.setState(dict);
    };

    printVisualNode = (elem) => {
        return <VisualNode data={elem.data}
                           id = {elem.id}
                           key = {elem.id.toString()}
                           onDelete = {(foundState) => this.deleteArrayObj("VisualNodeList", foundState)}
                           onUpdate = {(newState) => this.updateArrayObj("VisualNodeList", newState)}/>
    };

    printTextNode = (elem) => {
        return <TextNode data = {elem.data}
                         id = {elem.id}
                         key = {elem.id.toString()}
                         onDelete = {(foundState) => this.deleteArrayObj("TextNodeList", foundState)}
                         onUpdate = {(newState) => this.updateArrayObj("TextNodeList", newState)}/>
    };

    render() {

        const navBar = <Navbar bg="dark" variant="dark">
                            <Navbar.Brand>BrainRush</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link onClick ={() => {this.createArrayObj("TextNodeList", this.DefState.getDefaultTextNode)}}>Text</Nav.Link>
                                <Nav.Link onClick ={() => {this.createArrayObj("VisualNodeList", this.DefState.getDefaultVisualNode)}}>Visual</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                      </Navbar>;

        const TextNodeList = this.state.TextNodeList;
        const VisualNodeList = this.state.VisualNodeList;

        return (
            <div className={"w-100"}>
                {navBar}
                {
                    TextNodeList.ListOfObjects.map((elem) => this.printTextNode(elem))
                }
                {
                    VisualNodeList.ListOfObjects.map((elem) => this.printVisualNode(elem))
                }
            </div>
        );
    }
};