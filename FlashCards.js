// Require the 'inquirer' package
var inquirer = require('inquirer');

// Import card constructor implementations
var clozeCards = require('./ClozeCard.js');
var basicCards = require('./BasicCard.js');

// Import questions
var kookQuestions = require('./Questions.js').kookQuestions;
var businessQuestions = require('./Questions.js').businessQuestions;

// Variables that hold the questions list
var clozeQuestions = [];
var basicQuestions = [];

// Populate the cloze-deleted questions list
for (var i = 0; i < kookQuestions.length; i++) {
    var cq = new clozeCards.ClozeCard(kookQuestions[i].fullText, kookQuestions[i].cloze);
    clozeQuestions.push(cq);
}

// Populate the basic questions list
for (var i = 0; i < businessQuestions.length; i++) {
    var bq = new basicCards.BasicCard(businessQuestions[i].front, businessQuestions[i].back);
    basicQuestions.push(bq);
}

// What question the user is currently on
var currentQuestion = 0;
// How many questions the user has gotten right
var answerRight = 0;
// How many questions the user has gotten wrong
var answerWrong = 0;


function startMenu() {
    inquirer.prompt([
        {
            name: 'Menu',
            type: 'list',
            message: 'SELECT A GAME',
            // choices may be defined as an array or a function that returns an array
            choices: [
                '- See If Your A Kook -',
                '- Guess The Business -'
            ]
        }
    ]).then(function (answer) {
        console.log('\n');

        if (answer.Menu === '- See If Your A Kook -' ) {
            seperator();
            askClozeQuestions();
        } else if (answer.Menu === '- Guess The Business -' ) {
            seperator();
            askBasicQuestions();
        } else {
            console.log('Ooops Something Broke... I Blame You.');
        }
    })
}


function askClozeQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: clozeQuestions[currentQuestion].partial + '\nAnswer: ',
            name: 'userGuess'
        }
    ]).then(function (answers) {
        console.log('\n');


        // Check if the user has guessed correctly
        if (answers.userGuess.toLowerCase() === clozeQuestions[currentQuestion].cloze.toLowerCase()) {
            console.log('Correct!');
            answerRight++;
        } else {
            console.log('Incorrect!');
            answerWrong++;
        }

        // Show the correct answer
        console.log(clozeQuestions[currentQuestion].fullText);
        console.log('\n');
        seperator();

        // Advance to the next question
        if (currentQuestion < clozeQuestions.length - 1) {
            currentQuestion++;
            askClozeQuestions();
        } else {
            console.log('Game Over!');
            console.log('Correct Answers: ' + answerRight);
            console.log('Incorrect Answers: ' + answerWrong);
            console.log('\n');
            seperator();

            inquirer.prompt([
                {
                    type: 'confirm',
                    message: 'Would You Like To Go Back To The Main Menu?',
                    name: 'mainMenu'
                }
            ]).then(function (answers) {
                if (answers.mainMenu) {
                    // Reset the game
                    currentQuestion = 0;
                    answerRight = 0;
                    answerWrong = 0;

                    startMenu();

                } else {
                    // Exit the game
                    console.log('See ya!');
                }
            })
        }
    })
}

function askBasicQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: basicQuestions[currentQuestion].front + '\nAnswer: ',
            name: 'userGuess'
        }
    ]).then(function (answers) {
        console.log('\n');


        // Check if the user has guessed correctly
        if (answers.userGuess.toLowerCase() === basicQuestions[currentQuestion].back.toLowerCase()) {
            console.log('Correct!');
            answerRight++;
        } else {
            console.log('Incorrect!');
            answerWrong++;
        }

        // Show the correct answer
        console.log(basicQuestions[currentQuestion].back);
        console.log('\n');
        seperator();

        // Advance to the next question
        if (currentQuestion < basicQuestions.length - 1) {
            currentQuestion++;
            askBasicQuestions();
        } else {
            console.log('Game Over!');
            console.log('Correct Answers: ' + answerRight);
            console.log('Incorrect Answers: ' + answerWrong);
            console.log('\n');
            seperator();

            inquirer.prompt([
                {
                    type: 'confirm',
                    message: 'Would You Like To Go Back To The Main Menu?',
                    name: 'mainMenu'
                }
            ]).then(function (answers) {
                if (answers.mainMenu) {
                    // Reset the game
                    currentQuestion = 0;
                    answerRight = 0;
                    answerWrong = 0;

                    startMenu();

                } else {
                    // Exit the game
                    console.log('See yaa!');
                }
            })
        }
    })
}


function seperator() {
    console.log('^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^\n');
}

//Select a game
startMenu();



