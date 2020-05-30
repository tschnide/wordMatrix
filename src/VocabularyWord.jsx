import React, { Component } from 'react';
import { getword } from "./LessonService";
import "./VocabularyWord.css";

class VocabularyWord extends Component {

    render() {
        const { currentLessonId, currentWordIndex, wordToDisplayIndex, underlineMovingVerticallyAfter, underlineMovingVerticallyUntil, underlineMovingHorizontallyAt, underlineMovingHorizontallyUntil } = this.props;

        if (currentWordIndex <= underlineMovingVerticallyUntil) {
            return (
                <td>{currentWordIndex > underlineMovingVerticallyAfter && currentWordIndex <= underlineMovingVerticallyUntil ? <h1><u>{getword(currentLessonId, wordToDisplayIndex)}</u></h1> : <h1>{getword(currentLessonId, wordToDisplayIndex)}</h1>}</td>
            );
        }
        else if (currentWordIndex <= underlineMovingHorizontallyUntil) {
            return (
                <td>{currentWordIndex >= underlineMovingHorizontallyAt && currentWordIndex <= underlineMovingHorizontallyUntil ? <h1><u>{getword(currentLessonId, wordToDisplayIndex)}</u></h1> : <h1>{getword(currentLessonId, wordToDisplayIndex)}</h1>}</td>
            );
        }
        else
            return (
                <td><h1><u>{getword(currentLessonId, wordToDisplayIndex)}</u></h1></td>
            );
    }
}

export default VocabularyWord;
