import React from 'react';
import "./Button.css";

const Button = props => {
    const {label, onButtonClick} = props;
    return ( 
       <button className="btn btn-outline-secondary btn-lg btn-light  btn-block" onClick={()=>(onButtonClick(label))}>{label.value}</button>
     );
}
 
export default Button;