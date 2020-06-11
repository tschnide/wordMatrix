import React, { Component } from 'react';
import "./VocabularyTable.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VocabularyRows from "./VocabularyRows";
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
                       <VocabularyRows
                            currentWordIndex={currentWordIndex}
                        />
                </table>
            </div>
        );
    };
}

export default VocabularyTable;