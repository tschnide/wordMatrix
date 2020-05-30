import React, { Component } from 'react';
import { getLessonName } from './LessonService';
import MediaDisplaySpace from "./MediaDisplaySpace";
import LessonButtonStack from "./LessonButtonStack";
import LessonTitle from "./LessonTitle";
import "./App.css";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWordIndex: 0,
            secondsSinceFirstClick: 0,
            timerInterval: null,
            title: null,
            currentLessonId: 0,
            buttonLabels: [
                { id: 0, value: getLessonName(0) },
                { id: 1, value: getLessonName(1) },
                { id: 2, value: getLessonName(2) },
                { id: 3, value: getLessonName(3) },
                { id: 4, value: getLessonName(4) },
                { id: 5, value: getLessonName(5) },
            ],
            currentButtonId: null
        };
        this.startTimer = this.startTimer.bind(this);
        this.handleSpaceBarEvent = this.handleSpaceBarEvent.bind(this);
        this.timerInterval = null;
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.setState((state) => ({ secondsSinceFirstClick: state.secondsSinceFirstClick + 1 }));
        }, 1000);
    }

    handleSpaceBarEvent(event) {
        if (event.keyCode === 32) {
            if (this.state.secondsSinceFirstClick >= 60) {
                this.setState({ currentWordIndex: 0, secondsSinceFirstClick: 0 });
                clearInterval(this.timerInterval);
            } else {
                this.setState((state) => ({ currentWordIndex: state.currentWordIndex + 1 }));
                if (this.state.currentWordIndex === 0) {
                    this.startTimer();
                }
            }
        }
    }

    handleButtonClick = label => {
        const lessonName = this.state.buttonLabels[label.id].value;
        const lessonId = label.id;
        this.setState({ title: lessonName });
        this.setState({ currentLessonId: lessonId });
        this.setState({ currentWordIndex: 0 });
        this.setState({ currentButtonId: lessonId });
        clearInterval(this.timerInterval);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.currentWordIndex !== this.state.currentWordIndex) {
            if (this.state.currentWordIndex === 62) {
                clearInterval(this.timerInterval);
                this.setState({ currentWordIndex: 0, secondsSinceFirstClick: 0 });
            }
        }
    }

    render() {
        const { title, currentWordIndex, currentLessonId, secondsSinceFirstClick, currentButtonId } = this.state;
        return (
            <div className="App full-height" onKeyDown={this.handleSpaceBarEvent} tabIndex="0">

                <div className="container-fluid h-100">
                   <LessonTitle
                        title={title}
                    />
                    <div className="row h-100">
                        <LessonButtonStack
                            buttonLabels={this.state.buttonLabels}
                            onButtonClick={this.handleButtonClick}
                        />
                        <MediaDisplaySpace
                            currentButtonId={currentButtonId}
                            currentLessonId={currentLessonId}
                            currentWordIndex={currentWordIndex}
                            secondsSinceFirstClick={secondsSinceFirstClick}
                            title={title}
                        />
                    </div>
                </div>
            </div >
        );
    }
}

export default App; 