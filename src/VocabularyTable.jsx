import React, { Component } from 'react';
import "./VocabularyTable.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VocabularyWord from "./VocabularyWord";
import { getLesson } from "./LessonService";

class VocabularyTable extends Component {
    constructor(props) {
        super(props);
        this.lesson = getLesson(0);
        this.state = {
            numberOfColumns: this.lesson.vocabulary[1].row.length,
            numberOfRows: this.lesson.vocabulary.length,
            numberOfCells: this.lesson.vocabulary.length * this.lesson.vocabulary[0].row.length,
            leftVerticalScoreingNumbers: this.numberOfColumns,
            cycle: 0,
        };
        this.underline = { textDecorationLine: 'underline' }
    }

    render() {
        const { currentWordIndex, currentLessonId } = this.props;
        let cycles = null;
        return (
            <div className="col-9" id="interactive-table">
                <table className="table" id="table-row" >
                    <tbody>
                        <tr>
                            <td id="no-border-left-top-right"></td>
                            <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 0}</td>
                            <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 1}</td>
                            <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 2}</td>
                            <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 3}</td>
                            <td className="align-middle" id="no-border-left-top-right">{this.state.numberOfRows * 4}</td>
                        </tr>
                        {
                            this.lesson.vocabulary.map((rows, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td className="align-middle" id="no-border-left-top-bottom">{this.lesson.vocabulary.length * rows.row.length + rows.row.length * rowIndex}</td>
                                    {rows.row.map((word, index) => (
                                        index + rowIndex * rows.row.length < currentWordIndex
                                            ? <td key={index + rowIndex * rows.row.length} style={this.underline}><h1>{word.value}</h1></td>
                                            : <td key={index + rowIndex * rows.row.length}><h1>{word.value}</h1></td>
                                    ))}

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    };
}

export default VocabularyTable;