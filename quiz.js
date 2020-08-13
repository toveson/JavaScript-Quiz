// global vars
var questionEl = document.getElementById('questions')

// click Take the quiz!
document.getElementById('takeQuiz').addEventListener("click", startQuiz);
// vars for timer
var startingMinutes = parseInt(15);
var timeCount = startingMinutes * 60;

// global arrays
// array to store high scores
var highScores = [];
// array of questions
// var questions = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13', 'Q14', 'Q15'];
// array to keep track of how many questions the user answered correct
var answeredCorrect = [];

// timer
// updates timer every second
setInterval(updateTime, 1000);

function updateTime() {
    var minutesCount = Math.floor(timeCount / 60);
    var secondsCount = timeCount % 60;

    secondsCount = secondsCount < 10 ? '0' + secondsCount : secondsCount;
    document.getElementById('countdown').innerHTML = minutesCount + ':' + secondsCount
    timeCount--;

    // make the timer stop at 0
}

// function to select next question.
function nextQuestion() {
    questionEl.innerText = possibleQs.question
}
//Done// I need an array of High scores
// Done// I need an array to hold questions

// DoI need this array if i nake the correct answer a truthy in my var Qs ? // I need an array to hold answers for each question

// I need a function to start the quiz
function startQuiz() {
    // now a question needs to appear in the questions card.
    nextQuestion()
    // document.getElementById('questions').innerHTML = Q1 (question);
    console.log('clicked!')
}



// I need a function to control the question number
// I need a function to display the quiz question
// I need a function to display the quiz possible answers
// I need a function to check the selected answer
//in this function if the answer is correct, move on to the next question and change color of spinner to green
//if the answer is incorrect I need to remove time as a penalty and change the spinner color to red
// after moving on to the next question change the question number
// Done // I need a temporary array to hold the amount of questions ther user got correct
// when the quiz is complete I will ask the user for their initials
// after the user submits their initials I will store their score in the High score array (w/initials)
// if the user beats one of the high scores I need to display their score above the ones they beat
// I will do this with a function to display the list in order of score from high to low







// My Questions
// this also gives me a way to check for correct answers
var possibleQs = [
    {
        question: "In an .html document where should you link an external .js at?",
        answers: [

            { text: "Right before the </body>", correct: true },
            { text: "In the <head> after any linked CSS", correct: false },
            { text: "Right after <body>", correct: false },
            { text: "just above the closing </html>", correct: false }
        ]
    },
    {
        question: "If you are writing JavaScript in your .html where should you write it",
        answers: [
            { text: "<script>_here_</script>" },
            { text: "<script src=”_here_”></script>" },
            { text: "<body></body>" },
            { text: "<head></head>" }
        ]
    },
    {
        question: "What is the proper way to write a for loop?",
        answers: [
            { text: "for (let i = 0; i < array.length; i++) {};" },
            { text: "for {i < array.length; let i = 0;  i++} ();" },
            { text: "for (i++; i < array.length; let i = 0) {};" },
            { text: "for {i++; i = array.length; let i <  0} ();" }
        ]
    },
    {
        question: "Given (array[Math.floor(Math.random() * array.length)]); What is the purpose of .floor ?",
        answers: [
            { text: "It removes any decimal numbers." },
            { text: "It forces the number to be 0" },
            { text: "It rounds to the nearest whole number." },
            { text: "used the first index from an array." }
        ]
    },
    {
        question: "Given (array[Math.floor(Math.random() * array.length)]); What is the purpose of .random?",
        answers: [
            { text: "It chooses any index from array." },
            { text: "It gets a random line of code." },
            { text: "It will make a random math problem." },
            { text: "Generates a random number." }
        ]
    },
    {
        question: "How do you write a string?",
        answers: [
            { text: 'var example = “abc”?' },
            { text: "var example = (a, b, c);" },
            { text: "var example = [a, b, c];" },
            { text: 'var example (“a, b, c”)' }
        ]
    },
    {
        question: "How do you write an array?",
        answers: [
            { text: 'var example = [“a”, “b”, “c”];' },
            { text: "var example = [a, b, c];" },
            { text: 'var example = “abc”;' },
            { text: 'var example (“a, b, c”);' }
        ]
    },
    {
        question: "What is a Boolean?",
        answers: [
            { text: "True or false" },
            { text: "The difference between two numbers." },
            { text: "True" },
            { text: "False" }
        ]
    },
    {
        question: "What does != mean?",
        answers: [
            { text: "Not equal" },
            { text: "must equal" },
            { text: "important equal" },
            { text: "Breaks your code" }
        ]
    },
    {
        question: "What is a good way to debug JavaScript?",
        answers: [
            { text: "the console" },
            { text: "console.log();" },
            { text: "bugs are okay in JavaScript" },
            { text: "A bug bomb" }
        ]
    },
    {
        question: "What does ++ mean?",
        answers: [
            { text: "Increment a number" },
            { text: "add the numbers twice" },
            { text: "Zooms in on the screen" },
            { text: "adds the number then adds it again" }
        ]
    },
    {
        question: "What does -- mean",
        answers: [
            { text: "decrement a number." },
            { text: "subtract a number twice." },
            { text: "zooms out on the screen" },
            { text: "subtracts the number then subtracts it again" }
        ]
    },
    {
        question: 'Given var example = “abc”.split(“”); what does .split(“”) do?',
        answers: [
            { text: "will separate each character" },
            { text: "Will split “a b c” if there are any spaces" },
            { text: "Will make an three arrays, one for a,b and c" },
            { text: "Will add a space between each character" }
        ]
    },
    {
        question: "given ( a || b || c ) what does || mean",
        answers: [
            { text: "or" },
            { text: "and" },
            { text: "if" },
            { text: "else" }
        ]
    },
    {
        question: "Given array.push(example) what does .push do?",
        answers: [
            { text: "inserts example to array" },
            { text: "pushes array down one line of code" },
            { text: "pushes array up one line of code" },
            { text: "puts array into a string with example" }
        ]
    }
]