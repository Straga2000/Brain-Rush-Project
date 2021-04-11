import React, {Component} from 'react';
import Draggable from "react-draggable";
import Card from "react-bootstrap/cjs/Card";
import Dropdown from "react-bootstrap/cjs/Dropdown";
import Button from "react-bootstrap/cjs/Button";
import IOElement from "./IOElement";
import ObjectCRUD from "../../Scripts/UpdateObject";
import DefaultState from "../../Scripts/CreateDefaultState";

export default class HolderElement extends Component {
    state = {
        data : this.props.data,
        IO : this.props.IO,
        id : this.props.id
    };

    setWidth = (e) => {

        //console.log();
        const data = {...this.state.data};
        data.width = e.target.innerText + "%";
        this.setState({data});

    };

    render() {

        const {name, width} = this.state.data;
        const IO = this.state.IO.handleObjectGet();

        const dropdown = <Dropdown variant={"sm"}>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
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
                <Card className={"border-primary w-" + width}>
                    <Card.Header className="d-flex align-items-center justify-content-between">
                        <IOElement data = {IO.data} id = {IO.id} key = {IO.id.toString()} onUpdate = {IO.handleObjectUpdate}/>
                        {dropdown}
                    </Card.Header>
                    <Card.Body className = "d-flex flex-column bg-light">
                        {this.props.children}
                        <Button className="float-left btn-sm mt-3" variant="danger" onClick={() => this.props.onDelete(this.state)}>Delete node</Button>
                    </Card.Body>
                </Card>
            </Draggable>
        );
    }
}
