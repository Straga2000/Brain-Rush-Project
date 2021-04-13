import React, {Component} from 'react';
import Image from "react-bootstrap/Image";
import IOElement from "./IOElement";
import {renderConditional} from "../../Scripts/reactUtilities";

export default class VisualURLElement extends Component {

    state = {
        data: this.props.data,
        id: this.props.id
    };

    updateLink = (newState) => {
        const data = {...this.state.data};
        data.url = newState;
        this.setState({data});
        this.props.onUpdate(this.state);
        ///console.log(data.url.data);
    };

    render() {
        const url = this.state.data.url;
        console.log(url);
        return (
            <div>
                {/*{renderConditional(*/}
                {/* <Image src={url.data.text} onError={this.updateLinkByBlank} fluid/>,*/}
                {/* <h5 className="text-primary font-weight-bold">BROKEN LINK</h5>, (url === ""))}*/}
                <Image src={url.data.text} fluid/>
                 {/*{(url !== "") ? <Image src={url.data.text} fluid/> : <h5 className="text-primary font-weight-bold">BROKEN PHOTO</h5>}*/}
                <IOElement data = {url.data} id = {url.id} key = {url.id.toString()} onUpdate={(newState) => this.updateLink(newState)}/>
            </div>
        );
    }
}