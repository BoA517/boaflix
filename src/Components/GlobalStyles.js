import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// eslint-disable-next-line import/no-anonymous-default-export
//export default () => createGlobalStyle`
const globalStyles = createGlobalStyle`
${reset};
a{
    text-decoration:none;
    color:inherit;
}
*{
    box-sizing:border-box;
}
body{
    font-family: Roboto;
    font-size: 14px;
    background-color: rgba(20,20,20,1);
    color: white;
    padding-top: 50px;
}
`;

export default globalStyles;
