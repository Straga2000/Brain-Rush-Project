import React, {Component} from "react";
import Object, {ObjectType} from "./Templates/Object";
import IOElement, {IOElementType} from "./IOElement";

export default class App extends Component {
    state = {
        note :  {isSelected : false, text : "Write something..."}
    };

    updateNote = (newNote : IOElementType) =>{
         this.setState({note: newNote})
    };

    render() {
        return (
            <div>
                <IOElement data = {this.state.note} id = {"1"} onUpdate = {this.updateNote}/>
            </div>
        );
    }
}
