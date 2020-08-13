// global vars
var startingMinutes = parseInt(15);
var timeCount = startingMinutes * 60;

// global arrays
// array to store high scores
var highScores = [];
// array of questions
var questions = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13', 'Q14', 'Q15'];
// array to keep track of how many questions the user answered correct
var answeredCorrect =[];

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


            //Done// I need an array of High scores
            // Done// I need an array to hold questions

// I need an array to hold answers for each question

// I need a function to start the quiz
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
var Q1 = {
    question: "In an .html document where should you link an external .js at?",
    A: "Right before the </body>",
    B: "In the <head> after any linked CSS",
    C: "Right after <body>",
    D: "just above the closing </html>",
};

var Q2 = {
    question: "If you are writing JavaScript in your .html where should you write it",
    A: "<script>_here_</script>",
    B: "<script src=”_here_”></script>",
    C: "<body></body>",
    D: "<head></head>",
};

var Q3 = {
    question: "What is the proper way to write a for loop?",
    A: "for (let i = 0; i < array.length; i++) {};",
    B: "for {i < array.length; let i = 0;  i++} ();",
    C: "for (i++; i < array.length; let i = 0) {};",
    D: "for {i++; i = array.length; let i <  0} ();",
};

var Q4 = {
    question: "Given (array[Math.floor(Math.random() * array.length)]); What is the purpose of .floor ?",
    A: "It removes any decimal numbers.",
    B: "It forces the number to be 0.",
    C: "It rounds to the nearest whole number.",
    D: "used the first index from an array.",
};

var Q5 = {
    question: "Given (array[Math.floor(Math.random() * array.length)]); What is the purpose of .random?",
    A: "It chooses any index from array.",
    B: "It gets a random line of code.",
    C: "It will make a random math problem.",
    D: "Generates a random number.",
};

var Q6 = {
    question: "How do you write a string?",
    A: "var example = “abc”;",
    B: "var example = (a, b, c);",
    C: "var example = [a, b, c];",
    D: "var example (“a, b, c”)",
};
var Q7 = {
    question: "How do you write an array?",
    A: "var example = [“a”, “b”, “c”];",
    B: "var example = [a, b, c];",
    C: "var example = “abc”;",
    D: "var example (“a, b, c”);",
};
var Q8 = {
    question: "What is a Boolean?",
    A: "True or false",
    B: "The difference between two numbers.",
    C: "True",
    D: "False",
};
var Q9 = {
    question: "What does != mean?",
    A: "Not equal",
    B: "must equal",
    C: "important equal",
    D: "Breaks your code",
};
var Q10 = {
    question: "What is a good way to debug JavaScript?",
    A: "the console",
    B: "console.log();",
    C: "bugs are okay in JavaScript",
    D: "A bug bomb",
};
var Q11 = {
    question: "What does ++ mean?",
    A: "Increment a number ",
    B: "add the numbers twice",
    C: "Zooms in on the screen",
    D: "adds the number then adds it again",
};
var Q12 = {
    question: "What does -- mean",
    A: "decrement a number.",
    B: "subtract a number twice.",
    C: "zooms out on the screen",
    D: "subtracts the number then subtracts it again",
};
var Q13 = {
    question: "Given var example = “abc”.split(“”); what does .split(“”) do?",
    A: "will separate each character",
    B: "Will split “a b c” if there are any spaces",
    C: "Will make an array for a,b and c",
    D: "Will add a space between each character",
};
var Q14 = {
    question: "given ( a || b || c ) what does || mean",
    A: "or",
    B: "and",
    C: "if",
    D: "else",
};
var Q15 = {
    question: "Given array.push(example) what does .push do?",
    A: "inserts example to array",
    B: "pushes array down one line of code",
    C: "pushes array up one line of code",
    D: "puts array into a string with example",
};