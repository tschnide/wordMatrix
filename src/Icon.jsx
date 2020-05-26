import React from 'react';
import img from './images/pig.jpg';
import "./App.css";

// This is not currently in use. When pictures are available this can go above the table to display a picture and a title.
const Icon = props => {
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

export default Icon;