import React, { Component } from 'react';
import WelcomePanel from './WelcomePanel';
import InteractiveTable from './InteractiveTable';
import Message from "./Message";
import Title from "./Title";

class InteractiveSpace extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { title, currentLessonId, currentWordIndex, secondsSinceFirstClick, currentButtonId } = this.props;
        if (currentButtonId === null) {
            return (
                // <div className="row justify-content-center" id="welcome-panel">
                <div className="col" id="welcome-panel">
                    <WelcomePanel />
                </div>
            );
        } else {
            return (
                <div className="col">
                    < div className="row">
                        <InteractiveTable
                            currentLessonId={currentLessonId}
                            currentWordIndex={currentWordIndex}
                            secondsSinceFirstClick={secondsSinceFirstClick}
                        />
                        <Message
                            currentWordIndex={currentWordIndex}
                            secondsSinceFirstClick={secondsSinceFirstClick}
                        />
                    </div>
                </div>
            );
        }
    }
}

export default InteractiveSpace;