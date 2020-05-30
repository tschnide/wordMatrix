import React, { Component } from 'react';
import GreetingView from './GreetingView';
import VocabularyTable from './VocabularyTable';
import StatusMessage from "./StatusMessage";

class MediaDisplaySpace extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { title, currentLessonId, currentWordIndex, secondsSinceFirstClick, currentButtonId } = this.props;
        if (currentButtonId === null) {
            return (
                <div className="col" id="welcome-panel">
                    <GreetingView />
                </div>
            );
        } else {
            return (
                <div className="col">
                    < div className="row">
                        <VocabularyTable
                            currentLessonId={currentLessonId}
                            currentWordIndex={currentWordIndex}
                            secondsSinceFirstClick={secondsSinceFirstClick}
                        />
                        <StatusMessage
                            currentWordIndex={currentWordIndex}
                            secondsSinceFirstClick={secondsSinceFirstClick}
                        />
                    </div>
                </div>
            );
        }
    }
}

export default MediaDisplaySpace;