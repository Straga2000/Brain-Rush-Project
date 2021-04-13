// import React, {useState, useEffect, useCallback} from 'react';
// import InputGroup from "react-bootstrap/InputGroup";
// import {useAsync} from "react-async";
//
//
// const fetchImage = async (e) => {
//     const reader = new FileReader();
//     const response = await reader.readAsDataURL(e.target.files[0]);
//     console.log(response);
//     return response;
// };
//
// export default function VisualElement(props) {
//     let url = "nothing";
//     const [isTextChanged, setIsTextChanged] = useToggle();
//
//     let visualInput = <InputGroup>
//         <input type="file" onChange={(e) => {
//                 const { data, error } = useAsync({ promiseFn: fetchImage, e });
//                 if (error) return error.message;
//                 if (data)
//                 {
//                     console.log(data);
//                     url = data;
//                 }
//                 url = "error";
//         }} accept="image/png, image/jpeg"/>
//     </InputGroup>;
//
//     return (
//         <div>
//             {visualInput}
//             <h3>ssd{url}</h3>
//             {/*<h3>{this.state.url}</h3>*/}
//             {/*{visualInput}*/}
//         </div>
//     );
// }