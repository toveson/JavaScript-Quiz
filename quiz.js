// global vars
var answerButton = document.getElementById('answer_button')

// vars for timer
var startingMinutes = parseInt(10);
var timeCount = startingMinutes * 60;
var intervalId;

// var for poddibleQs index
var qsIndex = 0;

// for displaying the question number
var currentQuestion = 1;

// array to keep track of how many questions the user answered correct
var answeredCorrect = 0;

// used to change spinner color 
var nextSpin = ['spin_']

var top10;

// global arrays
// array to store high scores
var highScore= [];
console.log(highScore);

// event listeners
// click Take the quiz!
document.getElementById('takeQuiz').addEventListener("click", startQuiz);
// click an answer
document.getElementById('question_a').addEventListener("click", userAnswer);
document.getElementById('question_b').addEventListener("click", userAnswer);
document.getElementById('question_c').addEventListener("click", userAnswer);
document.getElementById('question_d').addEventListener("click", userAnswer);


// function to select next question.
function nextQuestion() {
    // displayQuestionNumber();
    document.getElementById('questionNumber').innerText = 'question ' + currentQuestion.toString() + ' of 15.';
    // I need to display the quiz question
    if (qsIndex < possibleQs.length) {
        document.getElementById('questions').innerText = possibleQs[qsIndex].question;
        // I need to display the quiz possible answers
        document.getElementById('question_a').innerText = possibleQs[qsIndex].answers[0].text;
        document.getElementById('question_b').innerText = possibleQs[qsIndex].answers[1].text;
        document.getElementById('question_c').innerText = possibleQs[qsIndex].answers[2].text;
        document.getElementById('question_d').innerText = possibleQs[qsIndex].answers[3].text;
    } else {
        completeQuiz()
    }
};


function startQuiz() {
    // now a question needs to appear in the questions card.
    nextQuestion();

    // updates timer every second
    intervalId = setInterval(updateTime, 1000)

    function updateTime() {
        var minutesCount = Math.floor(timeCount / 60);
        var secondsCount = timeCount % 60;

        secondsCount = secondsCount < 10 ? '0' + secondsCount : secondsCount;
        document.getElementById('countdown').innerHTML = minutesCount + ':' + secondsCount;
        timeCount--;
        if (timeCount <= -1) {
            clearInterval(intervalId);
            completeQuiz();
        }

    };

};



// I need a function to check the selected answer
function userAnswer(index) {
    spin = 'spin_';
    nextSpin = spin.concat(qsIndex)
    //if the answer is correct
    if (possibleQs[qsIndex].answers[index].correct) {
        // change spinner type and color to green
        document.getElementById(nextSpin).classList.remove('spinner-border');
        document.getElementById(nextSpin).classList.add('spinner-grow');
        document.getElementById(nextSpin).classList.add('text-success');
        // add one to answeredCorrect
        answeredCorrect++;
    }
    // if the answer is incorrect
    else {
        // remove time as a penalty
        timeCount -= 60;
        // change the spinner type and color to red
        document.getElementById(nextSpin).classList.remove('spinner-border');
        document.getElementById(nextSpin).classList.add('spinner-grow');
        document.getElementById(nextSpin).classList.add('text-danger');
    };
    qsIndex++;
    currentQuestion++;
    nextQuestion();
    // completeQuiz();


};




// function postHighScore() {

//     // if () { userAnswer >

//     // };
//     // if the user beats one of the high scores I need to display their score above the ones they beat



//     // once highScore is sorted i need to display to highscores page
//     //I ll do this with a loop that runs 10 times or highScore.length
//     // I also need this loop to add each score to local storage
//     localStorage.setItem("topTen", JSON.stringify(highScore));
//     console.log(highScore);

// };











var userScore = [];


function completeQuiz() {
    // when the quiz is complete I will ask the user for their initials
    userInit = prompt('What are your initials?');
    scoreAlert = alert('You scored ' + answeredCorrect + ' out of 15!');

    // after the user submits their initials I will store their score in the High score array (w/initials)
    userScore.push('{ userInitials: ' + userInit + ' , answeredCorrect: ' + answeredCorrect + '},');
    // postHighScore();
}

// array of questions
var possibleQs = [
    {
        question: "In an .html document where should you link an external .js at?",
        answers: [
            { text: "In the <head> after any linked CSS", correct: false },
            { text: "Right before the </body>", correct: true },
            { text: "Right after <body>", correct: false },
            { text: "just above the closing </html>", correct: false }
        ]
    },
    {
        question: "If you are writing JavaScript in your .html where should you write it",
        answers: [
            { text: "<script>_here_</script>", correct: true },
            { text: "<script src=”_here_”></script>", correct: false },
            { text: "<body>_here_</body>", correct: false },
            { text: "<head>_here_</head>", correct: false }
        ]
    },
    {
        question: "What is the proper way to write a for loop?",
        answers: [
            { text: "for {i < array.length; let i = 0;  i++} ();", correct: false },
            { text: "for (i++; i < array.length; let i = 0) {};", correct: false },
            { text: "for (let i = 0; i < array.length; i++) {};", correct: true },
            { text: "for {i++; i = array.length; let i <  0} ();", correct: false }
        ]
    },
    {
        question: "Given (array[Math.floor(Math.random() * array.length)]); What is the purpose of .floor ?",
        answers: [
            { text: "It removes any decimal numbers from a random number.", correct: true },
            { text: "It forces the number to be 0", correct: false },
            { text: "It rounds to the nearest whole number.", correct: false },
            { text: "used the first index from an array.", correct: false }
        ]
    },
    {
        question: "Given (array[Math.floor(Math.random() * array.length)]); What is the purpose of .random?",
        answers: [
            { text: "It gets a random line of code.", correct: false },
            { text: "It will make a random math problem.", correct: false },
            { text: "It chooses any index from array.", correct: false },
            { text: "Generates a random number.", correct: true }
        ]
    },
    {
        question: "How do you write a string?",
        answers: [
            { text: "var example = (a, b, c);", correct: false },
            { text: "var example = [a, b, c];", correct: false },
            { text: 'var example = “a", "b", "c”;', correct: true },
            { text: 'var example (“a, b, c”)', correct: false }
        ]
    },
    {
        question: "given ( a || b || c ) what does || mean",
        answers: [
            { text: "and", correct: false },
            { text: "or", correct: true },
            { text: "if", correct: false },
            { text: "else", correct: false }
        ]
    },
    {
        question: "How do you write an array?",
        answers: [
            { text: 'var example = [“a”, “b”, “c”];', correct: true },
            { text: "var example = [a, b, c];", correct: false },
            { text: 'var example = “abc”;', correct: false },
            { text: 'var example (“a, b, c”);', correct: false }
        ]
    },
    {
        question: "What is a Boolean?",
        answers: [
            { text: "The difference between two numbers.", correct: false },
            { text: "True or false", correct: true },
            { text: "True", correct: false },
            { text: "False", correct: false }
        ]
    },
    {
        question: "What does != mean?",
        answers: [
            { text: "must equal", correct: false },
            { text: "important equal", correct: false },
            { text: "Not equal", correct: true },
            { text: "Breaks your code", correct: false }
        ]
    },
    {
        // fix this question
        question: "What is a good way to debug JavaScript?",
        answers: [
            { text: "pull your hair out", correct: false },
            { text: "bugs are okay in JavaScript", correct: false },
            { text: "A bug bomb", correct: false },
            { text: "the console", correct: true }
        ]
    },
    {
        question: "What does ++ mean?",
        answers: [
            { text: "add the numbers twice", correct: false },
            { text: "Zooms in on the screen", correct: false },
            { text: "adds the number then adds it again", correct: false },
            { text: "Increment a number", correct: true }
        ]
    },
    {
        question: "What does -- mean",
        answers: [
            { text: "subtract a number twice.", correct: false },
            { text: "decrement a number.", correct: true },
            { text: "zooms out on the screen", correct: false },
            { text: "subtracts the number then subtracts it again", correct: false }
        ]
    },
    {
        question: 'Given var example = “abc”.split(“”); what does .split(“”) do?',
        answers: [
            { text: "Will split “a b c” if there are any spaces", correct: false },
            { text: "Will make an three arrays, one for a,b and c", correct: false },
            { text: "will make each character it's own string.", correct: true },
            { text: "Will add a space between each character", correct: false }
        ]
    },
    {
        question: "Given array.push(example) what does .push do?",
        answers: [
            { text: "pushes array down one line of code", correct: false },
            { text: "pushes array up one line of code", correct: false },
            { text: "puts array into a string with example", correct: false },
            { text: "inserts example to array", correct: true }
        ]
    }
];

