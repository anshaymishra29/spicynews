import React from "react";
import spinner from './spinner.gif';
const Error = () =>{
    return(<><div className="container"><h1>Error 404: Page not found</h1>
    <div className="container"><img src={spinner} style={{height :'50px', width : '50px'}}/></div></div></>);
}

export default Error;