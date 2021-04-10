import React, {Component} from 'react';
import IOElement from "./Templates/IOElement";
import List from "../Scripts/CRUD";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    state = {
        IOElems : new List("IO"),
        counter: 0
    }

    constructor() {
        super();
        const info = {
            data : {isSelected : false, text : ""},
            id : 1
        }

        this.state.IOElems.handleObjectCreate(info);

    }

    ///TODO use transitions for the notes https://react-bootstrap.netlify.app/utilities/transitions/
    ///Create a "Are u sure?" dialog with the user https://react-bootstrap.github.io/components/modal/
    ///https://reactjsexample.com/draw-a-line-between-two-elements-in-react/ lines between posts
    render() {

        return (
            <div className={"w-100"}>
                aflngewnv
                {
                    this.state.IOElems.ListOfObjects.map((elem) =>
                        <IOElement data = {elem.data} id = {elem.id} key = {elem.id.toString()} onUpdate={this.state.IOElems.handleObjectUpdate}></IOElement>)
                }
            </div>
        );
    }
}

export default App;