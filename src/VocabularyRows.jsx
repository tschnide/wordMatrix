import React, { Component } from 'react';
import { getLesson } from "./LessonService";

class VocabularyRows extends Component {
    constructor(props) {
        super(props);
        this.lesson = getLesson(0);
        this.state = {
            numberOfColumns: this.lesson.vocabulary[1].row.length,
            numberOfRows: this.lesson.vocabulary.length,
            numberOfCells: this.lesson.vocabulary.length * this.lesson.vocabulary[0].row.length,
            leftVerticalScoreingNumbers: this.numberOfColumns,
            cycle: 0,
        }
        this.underline = { textDecorationLine: 'underline', textDecorationLine: '10%' }
    }
    render() {
        const { currentWordIndex } = this.props;
        if (currentWordIndex > 0 && currentWordIndex <= 30) {
            console.log("0 - 30");
            return (
                <tbody>
                    <tr>
                        <td id="no-border-left-top-right"></td>
                        <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 0}</td>
                        <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 1}</td>
                        <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 2}</td>
                        <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 3}</td>
                        <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 4}</td>
                    </tr>
                    {this.lesson.vocabulary.map((rows, rowIndex) => (
                        <tr key={rowIndex}>
                            <td className="align-middle" id="no-border-left-top-bottom">{this.lesson.vocabulary.length * rows.row.length + rows.row.length * rowIndex}</td>
                            {rows.row.map((word, index) => (
                                rowIndex + this.lesson.vocabulary.length * index < this.props.currentWordIndex
                                    ? <td key={index} style={this.underline}><h1>{word.value}</h1></td>
                                    : <td key={index}><h1>{word.value}</h1></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            );
        }
        if (currentWordIndex === 31 || currentWordIndex === 0 || currentWordIndex === 62 || currentWordIndex === 63) {
            return (
                <tbody>
                    <tr>
                        <td id="no-border-left-top-right"></td>
                        <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 0}</td>
                        <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 1}</td>
                        <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 2}</td>
                        <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 3}</td>
                        <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 4}</td>
                    </tr>
                    {this.lesson.vocabulary.map((rows, rowIndex) => (
                        <tr key={rowIndex}>
                            <td className="align-middle" id="no-border-left-top-bottom">{this.lesson.vocabulary.length * rows.row.length + rows.row.length * rowIndex}</td>
                            {rows.row.map((word, index) => (
                                <td key={index + rowIndex * rows.row.length}><h1>{word.value}</h1></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            );

        }
        if (currentWordIndex > 31 && currentWordIndex <= 61) {
            console.log("31 - 60");
            return (
                <tbody>
                    <tr>
                        <td id="no-border-left-top-right"></td>
                        <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 0}</td>
                        <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 1}</td>
                        <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 2}</td>
                        <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 3}</td>
                        <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 4}</td>
                    </tr>
                    {this.lesson.vocabulary.map((rows, rowIndex) => (
                        <tr key={rowIndex}>
                            <td className="align-middle" id="no-border-left-top-bottom">{this.lesson.vocabulary.length * rows.row.length + rows.row.length * rowIndex}</td>
                            {rows.row.map((word, index) => (
                                index + rowIndex * rows.row.length < this.props.currentWordIndex - 31
                                    ? <td key={index + rowIndex * rows.row.length} style={this.underline}><h1>{word.value}</h1></td>
                                    : <td key={index + rowIndex * rows.row.length}><h1>{word.value}</h1></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            );
        }

    }
}

export default VocabularyRows;