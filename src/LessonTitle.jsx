import React from 'react';
import "./App.css";

const LessonTitle = props => {
    const { title } = props;
    return (
        <div className="container">
            <div className="row" id="title">
            </div>
            <div className="row" id="title">
                <div className="col-11"><h1>{title}</h1></div>
            </div>
        </div>
    )
}

export default LessonTitle;