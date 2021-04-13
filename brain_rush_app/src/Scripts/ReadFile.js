export  default class Reader {

    readImage = async (e) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
            const text = (e.target.result);
            console.log(text);
            alert(text);
        };
        reader.readAsDataURL(e.target.file[0]);
        //URL.createObjectURL(event.target.files[0])
    };

    readText = async (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = async (e) => {
            console.log(e.target.result);
            //return e.target.result;
        };
        reader.readAsText(e.target.files[0]);
    };
}
//<input type="file" onChange={this.readText} />