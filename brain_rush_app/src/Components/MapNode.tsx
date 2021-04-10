import React from 'react';
import Object from "./Templates/Object";

import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/cjs/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from "react-bootstrap/cjs/Dropdown";
import Draggable from "react-draggable";

export type MapNodeType = {
    text : string,
    color : string,
    width : string
}

///so we need to introduce a data type each time we want to make a new model
///rn  my state is just data
export default class MapNode extends Object {
    constructor(props: MapNodeType) {
        super({data : props, id : ""});
    }


    render() {
        const {width, color, text} = this.state.data;


        return (
            {
            // <Draggable>
            //     <Card className={"border-0 w-" + width.replace(/%/, '')}>
            //         {/*<Card.Img variant="top" src="https://picsum.photos/720/400"/>*/}
            //         <Card.Header className="d-flex align-items-center justify-content-between">
            //             <h2>{postIt.title}</h2>
            //             <Dropdown>
            //                 <Dropdown.Toggle variant="primary" id="dropdown-basic">
            //                     Width
            //                 </Dropdown.Toggle>
            //
            //                 <Dropdown.Menu>
            //                     {["25%", "50%", "75%", "100%"].map((elem) =>
            //                         <Dropdown.Item key={elem} as="button" onClick = {this.setWidth}>{elem}</Dropdown.Item>
            //                     )}
            //                 </Dropdown.Menu>
            //             </Dropdown>
            //         </Card.Header>
            //         <Card.Body>
            //             {/*<Card.Title>Card Title</Card.Title>*/}
            //             {/*<Card.Text className="text-left d-flex justify-content-between">*/}
            //             {/*    Some quick example text to build on the card title and make up the bulk of*/}
            //             {/*    the card's content.*/}
            //             {/*</Card.Text>*/}
            //
            //             {isSelected === false ?
            //                 <p className="text-left" onClick={this.onInputChange}>{postIt.text !== "" ? postIt.text : "Write something..."}</p> :
            //                 <InputGroup size="sm" className="mb-3">
            //                     <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onBlur={this.onTextChange} onFocus={this.onInputInit}/>
            //                 </InputGroup>
            //             }
            //             <Button className="d-flex float-left btn-sm" variant="danger" onClick={() => this.props.onDelete(this.state.postIt.id)}>Delete note</Button>
            //         </Card.Body>
            //     </Card>
            // </Draggable>
            }
        );
    }
}
