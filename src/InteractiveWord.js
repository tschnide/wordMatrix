import React, { Component } from 'react';
import { getword } from "./Lessons";

class InteractiveWord extends Component {

    render() {
        const { currentWordIndex, wordToDisplayIndex, underlineMovingVerticallyAfter, underlineMovingVerticallyUntil, underlineMovingHorizontallyAt, underlineMovingHorizontallyUntil } = this.props;

        if (currentWordIndex <= underlineMovingVerticallyUntil) {
            return (
                <td>{currentWordIndex > underlineMovingVerticallyAfter && currentWordIndex <= underlineMovingVerticallyUntil ? <h1><u>{getword(wordToDisplayIndex)}</u></h1> : <h1>{getword(wordToDisplayIndex)}</h1>}</td>
            );
        }
        else if (currentWordIndex <= underlineMovingHorizontallyUntil) {
            return (
                <td>{currentWordIndex >= underlineMovingHorizontallyAt && currentWordIndex <= underlineMovingHorizontallyUntil ? <h1><u>{getword(wordToDisplayIndex)}</u></h1> : <h1>{getword(wordToDisplayIndex)}</h1>}</td>
            );
        }
        else
            return (
                <td><h1><u>{getword(wordToDisplayIndex)}</u></h1></td>
            );
    }
}

export default InteractiveWord;
