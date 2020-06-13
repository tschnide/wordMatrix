import React from 'react';
import LessonButton from './LessonButton';
import ReactDOM from 'react-dom';
import "./App.css";
import "./LessonButton.css";

const LessonButtonStack = (props) => {
    const { buttonLabels, onButtonClick } = props;
    console.log(buttonLabels);
    return (
        <div className="col-2 scrollable full-height" id="button-panel">
                {buttonLabels.map(label => (
                    <LessonButton
                        key={label.id}
                        label={label}
                        onButtonClick={onButtonClick}
                    />
                ))}
        </div>
    );
}

export default LessonButtonStack;