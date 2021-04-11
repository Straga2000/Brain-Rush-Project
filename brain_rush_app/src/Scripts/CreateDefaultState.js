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

}