import React from 'react';
import img from './images/pig.jpg';
import "./App.css";

function Icon(props) {
    const { title } = props;
    return (
        <div className="container border">
            <div className="row justify-content-sm-center border">
                <div className="col-sm-3 outer  border">
                    <div className="iconTextInner">
                        <h1 id="centerText">{title}</h1>
                    </div>
                </div>
                <div className="col-sm-3 border">
                    <img src={img} alt="missing pig" />
                </div>
            </div>
        </div>
    )
}

export default Icon;