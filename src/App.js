import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InteractiveWord from "./InteractiveWord";
import Message from "./Message";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWordIndex: 0,
            secondsSinceFirstClick: 0,
            timerInterval: null
        };
        this.startTimer = this.startTimer.bind(this); 
        this.handleSpaceBarEvent = this.handleSpaceBarEvent.bind(this);
        this.timerInterval = null;
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.setState((state) => ({ secondsSinceFirstClick: state.secondsSinceFirstClick + 1 }));
        }, 1000);
    }

    handleSpaceBarEvent(event) {
        if (event.keyCode === 32) {
            if (this.state.secondsSinceFirstClick >= 60) {
                this.setState({ currentWordIndex: 0, secondsSinceFirstClick: 0 });
                clearInterval(this.timerInterval);
            } else {
                this.setState((state) => ({ currentWordIndex: state.currentWordIndex + 1 }));
                if (this.state.currentWordIndex === 0) {
                    this.startTimer();
                }
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.currentWordIndex !== this.state.currentWordIndex) {
            if (this.state.currentWordIndex === 62) {
                clearInterval(this.timerInterval);
                this.setState({ currentWordIndex: 0, secondsSinceFirstClick: 0 });
            }
        }
    }
    render() {
        const {currentWordIndex, secondsSinceFirstClick} = this.state;
        return (
            <div className="App" onKeyDown={this.handleSpaceBarEvent} tabIndex="0"> {/*One thing I'd like to fix here. You have to click the screen before the spacebar will work. Also, this element doesn't fill the screen so you have to click inside the border (pic attached). I'd like to make it so you can click anywhere and bring it into focus.*/}
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
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={0}
                                        underlineMovingVerticallyAfter={0}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={32}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={6}
                                        underlineMovingVerticallyAfter={6}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={33}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={12}
                                        underlineMovingVerticallyAfter={12}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={34}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={18}
                                        underlineMovingVerticallyAfter={18}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={35}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={24}
                                        underlineMovingVerticallyAfter={24}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={36}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                </tr>
                                <tr>
                                    <td className="align-middle" id="table-cells-left">35</td>
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={1}
                                        underlineMovingVerticallyAfter={1}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={37}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={7}
                                        underlineMovingVerticallyAfter={7}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={38}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={13}
                                        underlineMovingVerticallyAfter={13}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={39}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={19}
                                        underlineMovingVerticallyAfter={19}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={40}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={25}
                                        underlineMovingVerticallyAfter={25}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={41}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                </tr>
                                <tr>
                                    <td className="align-middle" id="table-cells-left">40</td>
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={2}
                                        underlineMovingVerticallyAfter={2}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={42}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={8}
                                        underlineMovingVerticallyAfter={8}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={43}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={14}
                                        underlineMovingVerticallyAfter={14}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={44}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={20}
                                        underlineMovingVerticallyAfter={20}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={45}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={26}
                                        underlineMovingVerticallyAfter={26}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={46}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                </tr>
                                <tr>
                                    <td className="align-middle" id="table-cells-left">45</td>
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={3}
                                        underlineMovingVerticallyAfter={3}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={47}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={9}
                                        underlineMovingVerticallyAfter={9}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={48}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={15}
                                        underlineMovingVerticallyAfter={15}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={49}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={21}
                                        underlineMovingVerticallyAfter={21}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={50}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={27}
                                        underlineMovingVerticallyAfter={27}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={51}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                </tr>
                                <tr>
                                    <td className="align-middle" id="table-cells-left">50</td>
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={4}
                                        underlineMovingVerticallyAfter={4}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={52}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={10}
                                        underlineMovingVerticallyAfter={10}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={53}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={16}
                                        underlineMovingVerticallyAfter={16}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={54}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={22}
                                        underlineMovingVerticallyAfter={22}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={55}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={28}
                                        underlineMovingVerticallyAfter={28}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={56}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                </tr>
                                <tr>
                                    <td className="align-middle" id="table-cells-left">55</td>
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={5}
                                        underlineMovingVerticallyAfter={5}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={57}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={11}
                                        underlineMovingVerticallyAfter={11}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={58}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={17}
                                        underlineMovingVerticallyAfter={17}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={59}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={23}
                                        underlineMovingVerticallyAfter={23}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={60}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                    <InteractiveWord
                                        currentWordIndex={currentWordIndex}
                                        wordToDisplayIndex={29}
                                        underlineMovingVerticallyAfter={29}
                                        underlineMovingVerticallyUntil={30}
                                        underlineMovingHorizontallyAt={61}
                                        underlineMovingHorizontallyUntil={61}
                                    />
                                </tr>
                            </tbody>
                        </table>
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
                                            secondsSinceFirstClick={secondsSinceFirstClick}
                                            currentWordIndex={currentWordIndex}
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
