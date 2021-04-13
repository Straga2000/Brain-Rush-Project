import React, {Component} from 'react';
import Draggable from "react-draggable";
import Card from "react-bootstrap/cjs/Card";
import Dropdown from "react-bootstrap/cjs/Dropdown";
import Button from "react-bootstrap/cjs/Button";
import IOElement from "./IOElement";

export default class HolderElement extends Component {
    state = {
        data : this.props.data,
        id : this.props.id
    };

    setWidth = (e) => {
        const data = {...this.state.data};
        data.width = e.target.innerText;
        this.setState({data});
        this.props.onUpdate(this.state);
    };

    updateName = (newIOState) => {
        const data = {...this.state.data};
        data.IOName = newIOState;
        this.setState({data});
        this.props.onUpdate(this.state);
    };

    deleteElement = () => {
        this.props.onDelete();
    };

    render() {

        const {width, IOName} = this.state.data;

        const dropdown = <Dropdown className="flex-row-reverse mt-1 mb-1 mr-1">
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
                                Width
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {["25%", "50%", "75%", "100%"].map((elem) =>
                                    <Dropdown.Item key={elem} as="button" onClick = {this.setWidth}>{elem}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>;

        return (
            <Draggable>
                <Card className={"border-primary w-" + width.replace("%", "")}>
                    <Card.Header className="d-flex align-items-center flex-wrap-reverse">
                        {/*<IOElement className="mb-1 mt-sm-3 mr-1" data = {IOName.data} id = {IOName.id} key = {IOName.id.toString()} onUpdate = {this.updateName}/>*/}
                        {dropdown}
                    </Card.Header>
                    <Card.Body className = "d-flex flex-column bg-light">
                        {this.props.children}
                        <Button className="float-left mt-3 btn-sm" variant="danger" onClick={this.deleteElement}>Delete node</Button>
                    </Card.Body>
                </Card>
            </Draggable>
        );
    }
}
