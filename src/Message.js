import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Get Ready"
        };
    }
    componentDidUpdate(prevProps, prevState) {
        const { secondsSinceFirstClick, wordIndex } = this.props;
        console.log("Seconds " + secondsSinceFirstClick);
        // If the word index is zero message is Get Ready
        // If the word index and the seconds are less than 61/60 message is in progress
        // If the word index is less than or equal to 61 and the seconds are greater than 60 the message is time's up
        // if the word index is greater than or equal to 61 and the seconds are less that or equal to 60 then the message is Done
        if (wordIndex === 0 && prevProps.wordIndex !== wordIndex) {
            this.setState({ message: "Get Ready" });
            console.log("From message: " + this.state.message);
        }
        if (wordIndex < 61 && wordIndex > 0 && secondsSinceFirstClick < 60 && prevProps.wordIndex !== wordIndex) {
            this.setState({ message: "In Progress" });
        }
        if (wordIndex >= 61 && prevProps.wordIndex !== wordIndex) {
            this.setState({ message: "Done" });
        }
        if (secondsSinceFirstClick >= 60 && wordIndex < 61 && prevProps.secondsSinceFirstClick !== secondsSinceFirstClick) {
            this.setState({ message: "Time's Up" });
        }
    }
    render() {
        return (
            <h1>{this.state.message}</h1>
        );
    }
}

export default Message;