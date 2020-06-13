import React, { Component } from 'react';
import { getLesson } from "./LessonService";
import './VocabularyRows.css'

class VocabularyRows extends Component {
    constructor(props) {
        super(props);
        // this.lesson = getLesson(this.props.currentLessonId);
        this.state = {
        }

    }
    render() {
        const lesson = getLesson(this.props.currentLessonId);
        const { currentWordIndex } = this.props;
        const numberOfRows = lesson.arrayOfRowObjects.length;
        const numberOfColumns = lesson.arrayOfRowObjects[0].row.length;
        const arrayOfRowObjects = lesson.arrayOfRowObjects;

        if (currentWordIndex > 0 && currentWordIndex <= 30) {
            return (
                <tbody>
                    <tr>
                        <td id="no-border-left-top-right"></td>
                        {
                            arrayOfRowObjects[0].row.map((rowObject, rowObjectIndex) => (
                                <td key={rowObjectIndex} className="align-middle" id="no-border-left-top-right">{numberOfColumns * rowObjectIndex}</td>
                            ))
                        }
                    </tr>
                    {arrayOfRowObjects.map((rowObject, rowObjectIndex) => (
                        <tr key={rowObjectIndex}>
                            <td className="align-middle" id="no-border-left-top-bottom">{numberOfRows * rowObject.row.length + rowObject.row.length * rowObjectIndex}</td>
                            {rowObject.row.map((wordObject, wordObjectIndex) => (
                                rowObjectIndex + numberOfRows * wordObjectIndex < this.props.currentWordIndex
                                    ? <td key={wordObjectIndex} className="underline"><h1>{wordObject.value}</h1></td>
                                    : <td key={wordObjectIndex}><h1>{wordObject.value}</h1></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            );
        } else if (currentWordIndex > 31 && currentWordIndex <= 61) {
            console.log("31 - 60");
            return (
                <tbody>
                    <tr>
                        <td id="no-border-left-top-right"></td>
                        {
                            arrayOfRowObjects[0].row.map((rowObject, rowObjectIndex) => (
                                <td key={rowObjectIndex} className="align-middle" id="no-border-left-top-right">{numberOfColumns * rowObjectIndex}</td>
                            ))
                        }
                    </tr>
                    {arrayOfRowObjects.map((rowObject, rowObjectIndex) => (
                        <tr key={rowObjectIndex}>
                            <td className="align-middle" id="no-border-left-top-bottom">{numberOfRows * rowObject.row.length + rowObject.row.length * rowObjectIndex}</td>
                            {rowObject.row.map((wordObject, wordObjectIndex) => (
                                wordObjectIndex + rowObjectIndex * rowObject.row.length < this.props.currentWordIndex - 31
                                    ? <td key={wordObjectIndex + rowObjectIndex * rowObject.row.length} className="underline"><h1>{wordObject.value}</h1></td>
                                    : <td key={wordObjectIndex + rowObjectIndex * rowObject.row.length}><h1>{wordObject.value}</h1></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            );
        } else {
            return (
                <tbody>
                    <tr>
                        <td id="no-border-left-top-right"></td>
                        {
                            arrayOfRowObjects[0].row.map((rowObject, rowObjectIndex) => (
                                <td key={rowObjectIndex} className="align-middle" id="no-border-left-top-right">{numberOfColumns * rowObjectIndex}</td>
                            ))
                        }
                    </tr>
                    {arrayOfRowObjects.map((rowObject, rowObjectIndex) => (
                        <tr key={rowObjectIndex}>
                            <td className="align-middle" id="no-border-left-top-bottom">{numberOfRows * rowObject.row.length + rowObject.row.length * rowObjectIndex}</td>
                            {rowObject.row.map((wordObject, wordObjectIndex) => (
                                <td key={wordObjectIndex + rowObjectIndex * rowObject.row.length}><h1>{wordObject.value}</h1></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            );
        }
    }
}

export default VocabularyRows;