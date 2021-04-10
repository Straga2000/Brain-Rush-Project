import React, {Component} from 'react';

export type ObjectType =
{
    data? : any,
    id : string,
}

export default class Object extends Component<ObjectType> {

    state = {
        data : this.props.data,
        id : this.props.id
    };

    public getState() {
        return this.state;
    };
};
