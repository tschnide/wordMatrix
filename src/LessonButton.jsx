import React from 'react';
import "./LessonButton.css";

const LessonButton = props => {
    const {label, onButtonClick} = props;
    return ( 
       <button className="btn btn-outline-secondary btn-lg btn-light  btn-block" onClick={()=>(onButtonClick(label))}>{label.value}</button>
     );
}
 
export default LessonButton;