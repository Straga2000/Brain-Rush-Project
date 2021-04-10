import React, { Component } from 'react';
import Object from './Object';

interface Props
{
    ListOfObjects : Array<Object>,
    id : string
}

export default class ObjectManager<T> extends Component<Props> {

    state = {
        ListOfObjects : this.props.ListOfObjects,
        id : this.props.id
    };

    handleObjectCreate = (newObject : Object) => {
        ///TODO implement ID creation for elements

        const ObjectList = this.props.ListOfObjects;
        const position = ObjectList.length;

        ObjectList.push(newObject);
        ObjectList[position].state.id = this.state.id + "/" +  position.toString(); ///create a new id

        this.setState({ListOfObjects : ObjectList});
    };

    handleObjectDelete = (id : string) => {
        const ObjectList = this.state.ListOfObjects.filter((elem) => elem.props.id !== id);
        this.setState({ListOfObjects : ObjectList});
    };

    handleObjectUpdate = (id : string, newObject : Object) => {
        const ObjectList = this.state.ListOfObjects.map((elem) => elem.props.id == id ? newObject : elem);
        this.setState({ListOfObjects : ObjectList});
    };

    handleObjectGet = (id : string) => {
        return this.state.ListOfObjects.filter((elem) => elem.props.id == id)[0];
    };

}
