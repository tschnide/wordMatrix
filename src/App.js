import React, { Component } from 'react';
import InteractiveTable from "./InteractiveTable";
import ButtonPanel from "./ButtonPanel";
import Message from "./Message";
import Icon from "./Icon";
import "./App.css";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWordIndex: 0,
            secondsSinceFirstClick: 58,
            timerInterval: null,
            title: "pig",
            buttonLabels: [
                { id: 0, value: "Lesson 1", title: 'goat', },
                { id: 1, value: "Lesson 2"},
                { id: 2, value: "Lesson 3"},
                { id: 3, value: "Lesson 4"},
                { id: 4, value: "Lesson 5"},
                { id: 5, value: "Lesson 6"},
                { id: 6, value: "Lesson 7"},
                { id: 7, value: "Lesson 8"},
                { id: 8, value: "Lesson 9"},
                { id: 9, value: "Lesson 10"},
                { id: 10, value: "Lesson 11"}
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

    handleButtonClick = label =>{        
       console.log(label.value); 
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
        const {title, currentWordIndex, secondsSinceFirstClick } = this.state;
        return (
            <div className="App" onKeyDown={this.handleSpaceBarEvent} tabIndex="0">
                <Icon
                    title={title}
                />
                <div className="row">
                    <ButtonPanel 
                        buttonLabels={this.state.buttonLabels}
                        onButtonClick={this.handleButtonClick}
                    />
                    <InteractiveTable
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