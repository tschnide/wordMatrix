import React from 'react';
import CustomButton from './CustomButton';
import "./Button.css";

const ButtonPanel = (props) => {
    const { buttonLabels, onButtonClick } = props;
    console.log(buttonLabels);
    return (
        <div className="col-2">
            {buttonLabels.map(label => (
                <CustomButton
                    key={label.id}
                    label={label}
                    onButtonClick={onButtonClick}
                />
    ))}
        </div>
    );
}

export default ButtonPanel;