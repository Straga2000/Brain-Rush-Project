
export default class ObjectCRUD
{
    constructor() {
        this.virtualObject = undefined;
    }

    handleObjectCreate = (newObject) => {
        this.virtualObject = newObject;
        return this.virtualObject;
    };

    handleObjectDelete = () => {
        this.virtualObject = undefined;
        return this.virtualObject;
    };

    handleObjectUpdate = (newObject) => {
        this.virtualObject = newObject;
        return this.virtualObject;
    };

    handleObjectGet = () => {
        return this.virtualObject;
    };

}