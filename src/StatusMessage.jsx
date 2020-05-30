import React, { Component } from 'react';

class StatusMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Get Ready"
        };
    }
    componentDidUpdate(prevProps, prevState) {
        const { secondsSinceFirstClick, currentWordIndex } = this.props;
        // On reset, put the message back to "Get Ready."
        if (currentWordIndex === 0 && prevProps.currentWordIndex !== currentWordIndex) {
            this.setState({ message: "Get Ready" });
        }
        // After the start but before either possible end, set the message to "In Progress."
        if (currentWordIndex < 61 && currentWordIndex > 0 && secondsSinceFirstClick < 60 && prevProps.currentWordIndex !== currentWordIndex) {
            this.setState({ message: "In Progress" });
        }
        // If all the words have been underlined, set the message to "Done."
        if (currentWordIndex >= 61 && prevProps.currentWordIndex !== currentWordIndex) {
            this.setState({ message: "Done" });
        }
        // If the time is up, set the message to "Time's up."
        if (secondsSinceFirstClick >= 60 && currentWordIndex < 61 && prevProps.secondsSinceFirstClick !== secondsSinceFirstClick) {
            this.setState({ message: "Time's Up" });
        }
    }
    render() {
        return (
            <div className="col-2" id="message">
                <table className="table-borderless">
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <h1>{this.state.message}</h1>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

        );
    }
}

export default StatusMessage;