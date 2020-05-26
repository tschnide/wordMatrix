import React, { Component } from 'react';
import InteractiveTable from "./InteractiveTable";
import ButtonPanel from "./ButtonPanel";
import Message from "./Message";
import Title from "./Title";
import { getLessonName } from "./Lessons";
import "./App.css";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWordIndex: 0,
            secondsSinceFirstClick: 0,
            timerInterval: null,
            title: 'Pig',
            currentLessonId: 0,
            buttonLabels: [
                { id: 0, value: getLessonName(0) },
                { id: 1, value: getLessonName(1) },
                { id: 0, value: getLessonName(0) },
                { id: 1, value: getLessonName(1) },
                { id: 0, value: getLessonName(0) },
                { id: 1, value: getLessonName(1) },
                { id: 0, value: getLessonName(0) },
                { id: 1, value: getLessonName(1) },
                { id: 0, value: getLessonName(0) },
                { id: 1, value: getLessonName(1) },
                { id: 0, value: getLessonName(0) },
                { id: 1, value: getLessonName(1) }
            ]
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
        const { title, currentWordIndex, currentLessonId, secondsSinceFirstClick } = this.state;
        return (
            <div className="App full-height" onKeyDown={this.handleSpaceBarEvent} tabIndex="0">
                <Title
                    title={title}
                />
                <div className="row">
                    <ButtonPanel
                        buttonLabels={this.state.buttonLabels}
                        onButtonClick={this.handleButtonClick}
                    />
                    <InteractiveTable
                        currentLessonId={currentLessonId}
                        currentWordIndex={currentWordIndex}
                        secondsSinceFirstClick={secondsSinceFirstClick}
                    />
                    <Message
                        secondsSinceFirstClick={secondsSinceFirstClick}
                        currentWordIndex={currentWordIndex} />
                </div>
            </div>
        );
    }
}

export default App; 