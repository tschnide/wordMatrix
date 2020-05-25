import React, { Component } from 'react';
import { getword } from "./words";

class InteractiveWord extends Component {

    render() {
        const { currentWordIndex, wordToDisplayIndex,  verticalUnderlineStart, verticalUnderlineEnd, horizontalUnderlineStart, horizontalUnderlineEnd } = this.props;

        if (currentWordIndex <= verticalUnderlineEnd) {
            return (
                    <td>{currentWordIndex > verticalUnderlineStart && currentWordIndex <= verticalUnderlineEnd ? <h1><u>{getword(wordToDisplayIndex)}</u></h1> : <h1>{getword(wordToDisplayIndex)}</h1>}</td>
            );
        }
        else if (currentWordIndex <= horizontalUnderlineEnd) {
            return (
                    <td>{currentWordIndex >= horizontalUnderlineStart && currentWordIndex <= horizontalUnderlineEnd ? <h1><u>{getword(wordToDisplayIndex)}</u></h1> : <h1>{getword(wordToDisplayIndex)}</h1>}</td>
            );
        }
        else
        return(
            <td><h1><u>{getword(wordToDisplayIndex)}</u></h1></td>
        );
    }
}

export default InteractiveWord;
