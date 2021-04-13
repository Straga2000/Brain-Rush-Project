import List from "./CRUD";

export default class DefaultState {

    getDefaultIO = (id) => {
        return {
            data : {isSelected : false, text : ""},
            id : id
        }
    };

    getDefaultNode = (id) => {
        const IOInfo = this.getDefaultIO(0);
        return {
            data :  {IOName : IOInfo, width : "25%"},
            id : id
        };
    };

    getDefaultTextNode = (id) => {
        const text = this.getDefaultIO(0);
        const referencesList = new List("references");
        const defaultNode = this.getDefaultNode(1);

        return {
          data : {refList : referencesList, text : text, defNode : defaultNode},
          id : id
        };
    };

    getDefaultVisualURLNode = (id) => {
        const url = this.getDefaultIO(0);
        return {
          data : {url : url},
          id : id
        };
    };

    getVisualNode = (id) => {
        const image = this.getDefaultVisualURLNode(0);
        const defaultNode = this.getDefaultNode(1);
        return {
            data : {img : image, defNode : defaultNode},
            id: id
        };
    };
}