import React from 'react';
import "./CustomButton.css";

const Button = props => {
    const {label, onButtonClick} = props;
    return ( 
       <button className="btn btn-primary btn-lg btn-block" onClick={()=>(onButtonClick(label))}>{label.value}</button>
     );
}
 
export default Button;