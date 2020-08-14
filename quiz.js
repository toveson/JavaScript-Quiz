
// click Take the quiz!
document.getElementById('takeQuiz').addEventListener("click", startQuiz);
// click an answer
document.getElementById('question_a').addEventListener("click", nextQuestion);
document.getElementById('question_b').addEventListener("click", nextQuestion);
document.getElementById('question_c').addEventListener("click", nextQuestion);
document.getElementById('question_d').addEventListener("click", nextQuestion);

// vars for timer
var startingMinutes = parseInt(15);
var timeCount = startingMinutes * 60;

// global arrays

// I need an array of High scores
// array to store high scores
var highScores = [];


// I need a temporary array to hold the amount of questions ther user got correct
// array to keep track of how many questions the user answered correct
var answeredCorrect = [];


// function to select next question.
// I need a function to display the quiz question
function nextQuestion() {
    document.getElementById('questions').innerText = possibleQs[0].question;
    document.getElementById('question_a').innerText = possibleQs[0].answers[0].text;
    document.getElementById('question_b').innerText = possibleQs[0].answers[1].text;
    document.getElementById('question_c').innerText = possibleQs[0].answers[2].text;
    document.getElementById('question_d').innerText = possibleQs[0].answers[3].text;
};

// updates timer every second
setInterval(updateTime, 1000);
function updateTime() {
    var minutesCount = Math.floor(timeCount / 60);
    var secondsCount = timeCount % 60;
    
    secondsCount = secondsCount < 10 ? '0' + secondsCount : secondsCount;
    document.getElementById('countdown').innerHTML = minutesCount + ':' + secondsCount;
    timeCount--;
    
    // make the timer stop at 0
};

function startQuiz() {
    // now a question needs to appear in the questions card.
    nextQuestion();
    console.log('clicked!');
};



// I need a function to control the question number
// I need a function to display the quiz possible answers
// I need a function to check the selected answer
//in this function if the answer is correct, move on to the next question and change color of spinner to green
//if the answer is incorrect I need to remove time as a penalty and change the spinner color to red
// after moving on to the next question change the question number
// when the quiz is complete I will ask the user for their initials
// after the user submits their initials I will store their score in the High score array (w/initials)
// if the user beats one of the high scores I need to display their score above the ones they beat
// I will do this with a function to display the list in order of score from high to low



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
            { text: "It removes any decimal numbers.", correct: true },
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
            { text: "Generates a random number.", correct: false },
            { text: "It chooses any index from array.", correct: true }
        ]
    },
    {
        question: "How do you write a string?",
        answers: [
            { text: "var example = (a, b, c);", correct: false },
            { text: "var example = [a, b, c];", correct: false },
            { text: 'var example = “abc”?', correct: true },
            { text: 'var example (“a, b, c”)', correct: false }
        ]
    },
    {
        question: "How do you write an array?",
        answers: [
            { text: "var example = [a, b, c];", correct: false },
            { text: 'var example = “abc”;', correct: false },
            { text: 'var example (“a, b, c”);', correct: false },
            { text: 'var example = [“a”, “b”, “c”];', correct: true }
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
        question: "What is a good way to debug JavaScript?",
        answers: [
            { text: "console.log();", correct: false },
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
            { text: "will separate each character", correct: true },
            { text: "Will add a space between each character", correct: false }
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
        question: "Given array.push(example) what does .push do?",
        answers: [
            { text: "pushes array down one line of code", correct: false },
            { text: "pushes array up one line of code", correct: false },
            { text: "puts array into a string with example", correct: false },
            { text: "inserts example to array", correct: true }
        ]
    }
];

