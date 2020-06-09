import React from 'react';
import './GreetingView.css';

const GreetingView = () => {
    return (
        <div>
            <h1>Welcome!</h1>
            <p>To begin:</p>
            <ol>
                <li>Choose a lesson from the buttons on the left.</li>
                <li>Click inside the table.</li>
                <li>Press the spacebar after reading each word.</li>
            </ol>
            <ul>
                <li>Before you begin the message will say "Get Ready".</li>
                <li>After you start the message will say "In Progress".</li>
                <li>If you finish in less than one minute the message will say "Done".</li>
                <li>If a minute passes before you finish the message will say "Time's up".</li>
            </ul>
        </div>
    );
}

export default GreetingView;