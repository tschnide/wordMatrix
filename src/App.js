import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InteractiveWord from "./InteractiveWord";
import Message from "./Message";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wordIndex: 0,
            secondsSinceFirstClick: 60,
            interval: null
        };
        this.startTimer = this.startTimer.bind(this);
        this.handleSpaceBarEvent = this.handleSpaceBarEvent.bind(this);
        this.interval = null;
    }

    startTimer() {
        // let secondsSinceFirstClick = this.state.secondsSinceFirstClick;
        this.interval = setInterval(() => {
            this.setState((state) => ({ secondsSinceFirstClick: state.secondsSinceFirstClick + 1 }));
        }, 1000);
    }

    handleSpaceBarEvent(event) {
        if (event.keyCode === 32) {
            if (this.state.secondsSinceFirstClick >= 60) {
                this.setState({ wordIndex: 0, secondsSinceFirstClick: 0 });
                clearInterval(this.interval);
            } else {
                this.setState((state) => ({ wordIndex: state.wordIndex + 1 }));
                if (this.state.wordIndex === 0) {
                    this.startTimer();
                }
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.wordIndex !== this.state.wordIndex) {
            if (this.state.wordIndex === 62) {
                clearInterval(this.interval);
                this.setState({ wordIndex: 0, secondsSinceFirstClick: 0 });
            }
        }
    }
    render() {
        return (
            <div className="App" onKeyDown={this.handleSpaceBarEvent} tabIndex="0"> {/*One thing I'd like to fix here. You have to click the screen before the spacebar will work.*/}
                <div className="row" id="title">
                </div>
                <div className="row" id="title">
                <div className="col-11" id="title"><h1>Pig</h1></div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <table className="table" id="table-row" >
                            <tbody>
                                <tr>
                                    <td id="table-cells-top-left"></td>
                                    <td className="align-middle" id="table-cells-top">0</td>
                                    <td className="align-middle" id="table-cells-top">6</td>
                                    <td className="align-middle" id="table-cells-top">12</td>
                                    <td className="align-middle" id="table-cells-top">18</td>
                                    <td className="align-middle" id="table-cells-top">24</td>
                                </tr>
                                <tr>
                                    <td className="align-middle" id="table-cells-left">30</td>
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={0}
                                        verticalUnderlineStart={0}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={32}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={6}
                                        verticalUnderlineStart={6}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={33}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={12}
                                        verticalUnderlineStart={12}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={34}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={18}
                                        verticalUnderlineStart={18}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={35}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={24}
                                        verticalUnderlineStart={24}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={36}
                                        horizontalUnderlineEnd={61}
                                    />
                                </tr>
                                <tr>
                                    <td className="align-middle" id="table-cells-left">35</td>
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={1}
                                        verticalUnderlineStart={1}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={37}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={7}
                                        verticalUnderlineStart={7}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={38}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={13}
                                        verticalUnderlineStart={13}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={39}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={19}
                                        verticalUnderlineStart={19}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={40}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={25}
                                        verticalUnderlineStart={25}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={41}
                                        horizontalUnderlineEnd={61}
                                    />
                                </tr>
                                <tr>
                                    <td className="align-middle" id="table-cells-left">40</td>
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={2}
                                        verticalUnderlineStart={2}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={42}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={8}
                                        verticalUnderlineStart={8}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={43}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={14}
                                        verticalUnderlineStart={14}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={44}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={20}
                                        verticalUnderlineStart={20}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={45}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={26}
                                        verticalUnderlineStart={26}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={46}
                                        horizontalUnderlineEnd={61}
                                    />
                                </tr>
                                <tr>
                                    <td className="align-middle" id="table-cells-left">45</td>
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={3}
                                        verticalUnderlineStart={3}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={47}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={9}
                                        verticalUnderlineStart={9}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={48}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={15}
                                        verticalUnderlineStart={15}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={49}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={21}
                                        verticalUnderlineStart={21}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={50}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={27}
                                        verticalUnderlineStart={27}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={51}
                                        horizontalUnderlineEnd={61}
                                    />
                                </tr>
                                <tr>
                                    <td className="align-middle" id="table-cells-left">50</td>
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={4}
                                        verticalUnderlineStart={4}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={52}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={10}
                                        verticalUnderlineStart={10}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={53}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={16}
                                        verticalUnderlineStart={16}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={54}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={22}
                                        verticalUnderlineStart={22}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={55}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={28}
                                        verticalUnderlineStart={28}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={56}
                                        horizontalUnderlineEnd={61}
                                    />
                                </tr>
                                <tr>
                                    <td className="align-middle" id="table-cells-left">55</td>
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={5}
                                        verticalUnderlineStart={5}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={57}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={11}
                                        verticalUnderlineStart={11}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={58}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={17}
                                        verticalUnderlineStart={17}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={59}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={23}
                                        verticalUnderlineStart={23}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={60}
                                        horizontalUnderlineEnd={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={this.state.wordIndex}
                                        wordToDisplayIndex={29}
                                        verticalUnderlineStart={29}
                                        verticalUnderlineEnd={30}
                                        horizontalUnderlineStart={61}
                                        horizontalUnderlineEnd={61}
                                    />
                                </tr>
                            </tbody>
                        </table>
                        {/* <h1>{this.state.secondsSinceFirstClick}</h1> */}
                    </div>
                    <div className="col-3">
                        <table className="table-borderless">
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Message
                                            secondsSinceFirstClick={this.state.secondsSinceFirstClick}
                                            wordIndex={this.state.wordIndex}
                                        />
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
