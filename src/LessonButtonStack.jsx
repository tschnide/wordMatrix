import React from 'react';
import LessonButton from './LessonButton';
import "./LessonButton.css";

const LessonButtonStack = (props) => {
    const { buttonLabels, onButtonClick } = props;
    console.log(buttonLabels);
    return (
        <div className="col-2" id="button-panel">
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