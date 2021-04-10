
export default class List
{
    constructor(IDElem = "") {
        this.ListOfObjects = [];
        this.IDElem = IDElem;
    }

    handleObjectCreate = (newObject) => {
        this.ListOfObjects.push(newObject);
        return this.ListOfObjects;
    };

    handleObjectDelete = (newObject) => {
        this.ListOfObjects.filter((elem) => elem !== newObject);
        return this.ListOfObjects;
    };

    handleObjectUpdate = (newObject) => {
        this.ListOfObjects.map((elem) => elem.id === newObject.id ? newObject : elem);
        return this.ListOfObjects;
    };

    handleObjectGet = (id) => {
        return this.ListOfObjects.filter((elem) => elem.id === id)[0];
    };

}