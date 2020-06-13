import React, { Component } from 'react';
import "./VocabularyTable.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VocabularyRows from "./VocabularyRows";

class VocabularyTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { currentWordIndex, currentLessonId } = this.props;
        return (
            <div className="col-9" id="interactive-table">
                <table className="table" id="table-row" >
                       <VocabularyRows
                            currentWordIndex={currentWordIndex}
                            currentLessonId={currentLessonId}
                        />
                </table>
            </div>
        );
    };
}

export default VocabularyTable;