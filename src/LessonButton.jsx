import React from 'react';
import "./LessonButton.css";

const LessonButton = props => {
    const {label, onButtonClick} = props;
    return (
       <button className="btn btn-outline-secondary btn-light  btn-block btn-lg"  onClick={()=>(onButtonClick(label))}>{label.value}</button>
     );
}

export default LessonButton;