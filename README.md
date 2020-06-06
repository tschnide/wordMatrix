This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project description

This is a teaching tool for children that have difficulty reading.

### How it works

* When you land on the first page you are presented with a welcome message.
* To the left are buttons. Each button is a different lesson. Click one to get started.
* After you click a button a lesson will appear. The student is meant to read each word and then hit the space bar. This gives them a visual reference of the words that have already been read.
    * On the first press of the space bar a one minute timer is set and a message to the right indicates that the lesson is in progress. The message is called the status message.
* The lesson can end in one of two ways.
    * The student can underline all of the words before one minute has elapsed. If this happens the status message will change to 'Done.'
    * One minute can elapse before the student has underlined all of the words. If this happens the status message will change to 'Time's Up."
* When the lesson has ended, pressing the space bar again will reset the lesson.

## To get this running on your local machine:
* Clone the project.
* Navigate to the wordMatrix folder run `npm install`.
* In the same folder run `npm start`.
* Note that this is currently under production and may not work as intended at this moment.

## Visit the production version
[www.travisschnider.com](https://travisschnider.com)
