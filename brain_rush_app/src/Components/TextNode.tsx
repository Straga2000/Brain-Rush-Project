import React from 'react';
import Object from "./Templates/Object";

import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/cjs/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from "react-bootstrap/cjs/Dropdown";
import Draggable from "react-draggable";

export type TextNodeType = {
    title: string,
    text: string,
    references: Array<String>,

}