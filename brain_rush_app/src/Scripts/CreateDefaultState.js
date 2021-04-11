import ObjectCRUD from "./UpdateObject";
import CRUD from "./CRUD";

export default class DefaultState {

    getDefaultIO = (id) => {
        return {
            data : {isSelected : false, text : ""},
            id : id
        }
    };

    getDefaultNode = (id) => {

        const IOElem = new ObjectCRUD(0);
        IOElem.handleObjectCreate(this.getDefaultIO(0));
        IOElem.virtualObject.data.text = "New node";
        return {
            data :  {name : "New node", width : "25%"},
            IO : IOElem,
            id : id
        };
    };

}